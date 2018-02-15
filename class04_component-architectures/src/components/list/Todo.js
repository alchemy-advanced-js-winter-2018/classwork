import html from './Todo.html';
import './Todo.css';
import Template from '../Template';
import { db } from '../../services/firebase';

const template = new Template(html);
const todos = db.ref('todos');

export default class Todo {
  constructor({ key }) {
    this.key = key;
    this.todo = todos.child(key);
  }

  handleCompleted(completed) {
    this.todo.child('completed').set(completed);
  }

  handleRemove() {
    this.todo.remove();
  }

  render() {
    const dom = template.clone();

    const taskElement = dom.querySelector('.task');
    const completedCheckbox = dom.querySelector('input[type=checkbox]');
    const removeButton = dom.querySelector('button.remove');

    this.onValue = this.todo.on('value', data => {
      const todo = data.val();
      // if it is deleted, return...
      if(!todo) return;
      const { task, completed } = data.val();
      taskElement.textContent = task;
      completedCheckbox.checked = completed;
    });

    completedCheckbox.addEventListener('change', () => {
      this.handleCompleted(completedCheckbox.checked);
    });

    removeButton.addEventListener('click', () => {
      if(confirm('Are you sure you want to remove this todo?')) this.handleRemove();
    });

    return dom;
  }

  unrender() {
    this.todo.off('value', this.onValue);
  }
}