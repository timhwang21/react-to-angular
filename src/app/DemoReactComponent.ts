import { createElement as e, Component } from 'react';

export interface DemoState {
  value: number;
}

export default class DemoComponent extends Component<void, DemoState> {
  state: any = {
    value: 0
  };

  decrement = () => this.setState(state => ({ value: state.value - 1 }));

  increment = () => this.setState(state => ({ value: state.value + 1 }));

  // Don't use JSX for demo because ng CLI doesn't support .tsx
  render() {
    const { value } = this.state;

    return e(
      'div',
      {},
      e('h4', {}, 'I am a complex React component.'),
      e('button', { onClick: this.decrement }, '-'),
      e('span', {}, value),
      e('button', { onClick: this.increment }, '+')
    );
  }
}
