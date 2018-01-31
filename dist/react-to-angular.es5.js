import { Component, Input, NgModule } from '@angular/core';
import { createElement } from 'react';
import { render } from 'react-dom';
var uniqueId = 0;
var WrapperComponent = /** @class */ (function () {
    function WrapperComponent() {
    }
    /**
     * @return {?}
     */
    WrapperComponent.prototype.ngOnInit = function () {
        this.id = 'React_' + uniqueId++;
    };
    /**
     * @return {?}
     */
    WrapperComponent.prototype.ngAfterViewInit = function () {
        this.node = document.getElementById(this.id);
        this.render();
    };
    /**
     * @return {?}
     */
    WrapperComponent.prototype.ngOnChanges = function () {
        if (this.node) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    WrapperComponent.prototype.render = function () {
        render(createElement(this.component, this.props), this.node);
    };
    return WrapperComponent;
}());
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'react-wrapper',
                template: "<div [id]=\"id\"></div>"
            },] },
];
/**
 * @nocollapse
 */
WrapperComponent.ctorParameters = function () { return []; };
WrapperComponent.propDecorators = {
    'component': [{ type: Input },],
    'props': [{ type: Input },],
};
var WrapperModule = /** @class */ (function () {
    function WrapperModule() {
    }
    return WrapperModule;
}());
WrapperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WrapperComponent],
                exports: [WrapperComponent]
            },] },
];
/**
 * @nocollapse
 */
WrapperModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { WrapperModule, WrapperComponent as ɵa };
//# sourceMappingURL=react-to-angular.es5.js.map
