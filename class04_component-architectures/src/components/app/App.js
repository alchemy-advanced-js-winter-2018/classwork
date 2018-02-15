import html from './app.html';
import Template from '../Template';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../list/TodoList';
import Filter from '../filter/Filter';
import { db } from '../../services/firebase';

const todos = db.ref('todos');

const template = new Template(html);

export default class App {

  handleFilter(filter) {
    if(this.todoList) this.todoList.unrender();
    this.todosSection.innerHTML = null;

    let listRef;
    if(filter === 'all') listRef = todos;
    else {
      listRef = todos.orderByChild('completed').equalTo(filter === 'completed');
    }

    this.todoList = new TodoList({ list: listRef });
    this.todosSection.appendChild(this.todoList.render());
  }

  render() {
    const dom = template.fragment;

    const addTodoSection = dom.querySelector('#add-todo');
    const filterSection = dom.querySelector('#filter');
    this.todosSection = dom.querySelector('#todos');

    const addTodo = new AddTodo();
    addTodoSection.appendChild(addTodo.render());

    const filter = new Filter({
      onFilter: (filter) => this.handleFilter(filter)
    });
    filterSection.appendChild(filter.render());

    this.handleFilter('all');

    return dom;
  }
}