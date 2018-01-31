import { createElement as e } from 'react';
import * as ReactDOM from 'react-dom';
import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'react-wrapper',
  template: `<div [id]="id"></div>`
})
export class WrapperComponent implements OnInit, OnChanges, AfterViewInit {
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

  render() {
    ReactDOM.render(e(this.component, this.props), this.node);
  }
}
