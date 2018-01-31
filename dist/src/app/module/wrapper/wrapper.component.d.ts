import { OnInit, OnChanges, AfterViewInit } from '@angular/core';
export declare class WrapperComponent implements OnInit, OnChanges, AfterViewInit {
    component: any;
    props: any;
    id: string;
    node: HTMLElement;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    render(): void;
}
