import Store from 'charly-state-store';
import { getNews } from './services/news-api';

export default class News extends Store {
  constructor() {
    super();

    this.state = {
      news: null,
      page: 1,
      pageSize: 20
    };

    const section = document.getElementById('news');
    this.heading = section.querySelector('h2');
    this.form = section.querySelector('form');
    this.list = section.querySelector('ul');
    this.pageSize = section.querySelector('select');
    this.prev = section.querySelector('#prev');
    this.next = section.querySelector('#next');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const topic = this.form.elements.topic.value;
      this.setState({ topic });
      this.searchNews();
    });

    this.pageSize.addEventListener('change', () => {
      const pageSize = this.pageSize.value;
      this.setState({ pageSize });
      this.searchNews();
    });

    this.prev.addEventListener('click', () => {
      this.setState({
        page: this.state.page - 1
      });
      this.searchNews();
    });

    this.next.addEventListener('click', () => {
      this.setState({
        page: this.state.page + 1
      });
      this.searchNews();
    });

    this.subscribe(() => this.render());
    this.render();
  }

  searchNews() {
    const { topic, page, pageSize } = this.state;

    getNews(topic, page, pageSize).then(response => {
      this.setState({ 
        news: response.articles,
        total: response.totalResults
      });
    });
  }

  // this is how we update based on state.
  // this should be safe to call again to update
  render() {
    const { heading, list } = this;
    
    list.innerHTML = null;

    const { topic, news, total, page, pageSize } = this.state;

    if(!news) {
      heading.textContent = 'Please enter a topic';
      return;
    }

    const totalPages = Math.ceil(total / pageSize);

    heading.textContent = `Page ${page} of ${totalPages} pages about ${topic}`;

    this.prev.disabled = page === 1;
    this.next.disabled = page === totalPages;
    
    news
      .map(n => {
        const li = document.createElement('li');
        li.textContent = n.title;
        return li;
      })
      .forEach(li => list.appendChild(li));

  }
}