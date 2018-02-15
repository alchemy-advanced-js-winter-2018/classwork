import html from './AddTodo.html';
import './AddTodo.css';
import Template from '../Template';
import { db } from '../../services/firebase';

const template = new Template(html);
const todos = db.ref('todos');

export default class AddTodo {

  handleSubmit(task) {
    const ref = todos.push();
    return ref.set({ task, completed: false });
  }

  render() {
    const dom = template.fragment;
    
    const form = dom.querySelector('form');
    const error = dom.querySelector('.error');

    form.addEventListener('submit', event => {
      event.preventDefault();
      error.textContent = '';

      const { task } = form.elements;
      
      this.handleSubmit(task.value)
        .then(() => {
          task.value = '';
        })
        .catch(err => {
          error.textContent = err.message;
        });
    });

    return dom;
  }
}