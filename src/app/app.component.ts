import { Component } from '@angular/core';
import DemoReactComponent from './DemoReactComponent';

@Component({
  selector: 'r2a-app-root',
  template: `
    <div style="text-align:center">
      <h1>
        React To Angular
      </h1>
      <r2a-react-wrapper [component]="component1" [props]="props1"></r2a-react-wrapper>
      <r2a-react-wrapper [component]="component2" [props]="props2"></r2a-react-wrapper>
      <r2a-react-wrapper [component]="component3"></r2a-react-wrapper>
      <button (click)="handleClick()">I am an Angular button</button>
    </div>
  `
})
export class AppComponent {
  component1 = 'span';
  props1: any = {
    children: 'I am a React span.'
  };

  component2 = 'button';
  props2: any = {
    children: 'I am a React button. Click me!',
    onClick: () => alert('I am a callback.')
  };

  component3: any = DemoReactComponent;

  handleClick = () => {
    this.props1 = { children: this.props1.children + ' Angular was here!' };
    this.props2 = { ...this.props2, children: this.props2.children + ' Angular was also here!' };
  }
}
