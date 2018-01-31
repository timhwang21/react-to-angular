import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import * as _uniqueId from 'lodash.uniqueId';

// Hack to get Rollup bundling working
const uniqueId = _uniqueId;

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
    this.id = uniqueId('React_');
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
    ReactDOM.render(React.createElement(this.component, this.props), this.node);
  }
}
