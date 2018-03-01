import { createElement as e } from 'react';
import * as ReactDOM from 'react-dom';
import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'r2a-react-wrapper',
  template: `<div [id]="id"></div>`
})
export class ReactWrapperComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() component: any;
  @Input() props: any;

  id: string;
  node: HTMLElement;

  ngOnInit() {
    this.id = 'React_' + uniqueId++;
  }

  ngAfterViewInit() {
    this.node = document.getElementById(this.id);
    this.render();
  }

  ngOnChanges() {
    if (this.node) {
      this.render();
    }
  }

  ngOnDestroy() {
    if (this.node) {
      this.destroy();
    }
  }

  render() {
    ReactDOM.render(e(this.component, this.props), this.node);
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this.node);
  }
}
