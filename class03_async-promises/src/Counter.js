import Store from 'charly-state-store';

export default class Counter extends Store {
  constructor() {
    // call the super constructor
    super();

    //initialize the state
    this.state = {
      count: 0
    };

    // find our buttons
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');

    // wire up click events to change the state
    minus.addEventListener('click', () => {
      this.setState({
        count: this.state.count - 1
      });
    });
    
    plus.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
    });

    // get a reference to the pre element
    this.pre = document.getElementById('target'); 

    // call render when the state changes
    this.subscribe(() => this.render());

    // kick of initial render with the initial state
    this.render();
  }

  render() {
    this.pre.textContent = JSON.stringify(this.state, true, 2);
  }


}