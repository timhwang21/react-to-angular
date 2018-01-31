import { Component, Input, NgModule } from '@angular/core';
import { createElement } from 'react';
import { render } from 'react-dom';

let uniqueId = 0;
class WrapperComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.id = 'React_' + uniqueId++;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.node = document.getElementById(this.id);
        this.render();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.node) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    render() {
        render(createElement(this.component, this.props), this.node);
    }
}
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'react-wrapper',
                template: `<div [id]="id"></div>`
            },] },
];
/**
 * @nocollapse
 */
WrapperComponent.ctorParameters = () => [];
WrapperComponent.propDecorators = {
    'component': [{ type: Input },],
    'props': [{ type: Input },],
};

class WrapperModule {
}
WrapperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WrapperComponent],
                exports: [WrapperComponent]
            },] },
];
/**
 * @nocollapse
 */
WrapperModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { WrapperModule, WrapperComponent as ɵa };
//# sourceMappingURL=react-to-angular.js.map
