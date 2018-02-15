import html from './TodoList.html';
import Template from '../Template';
import Todo from './Todo';

const template = new Template(html);

export default class TodoList {
  constructor({ list }) {
    this.list = list;
  }

  render() {
    const dom = template.clone();
    const list = dom.querySelector('ul');

    const map = new Map();

    this.onAdded = this.list.on('child_added', data => {
      const todo = new Todo({ key: data.key });
      const todoDom = todo.render();
      map.set(data.key, {
        component: todo,
        dom: [...todoDom.childNodes]
      });

      list.appendChild(todoDom);
    });

    this.onRemoved = this.list.on('child_removed', data => {
      const { component, dom } = map.get(data.key);
      map.delete(data.key);
      component.unrender();
      dom.forEach(node => node.remove());
    });

    return dom;
  }

  unrender() {
    this.list.off('child_added', this.onAdded);
    this.list.off('child_removed', this.onRemoved);
  }
}