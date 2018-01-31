(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'react', 'react-dom'], factory) :
	(factory((global['react-to-angular'] = {}),global.ng.core,global.react,global['react-dom']));
}(this, (function (exports,core,react,reactDom) { 'use strict';

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
        reactDom.render(react.createElement(this.component, this.props), this.node);
    };
    return WrapperComponent;
}());
WrapperComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'react-wrapper',
                template: "<div [id]=\"id\"></div>"
            },] },
];
/**
 * @nocollapse
 */
WrapperComponent.ctorParameters = function () { return []; };
WrapperComponent.propDecorators = {
    'component': [{ type: core.Input },],
    'props': [{ type: core.Input },],
};
var WrapperModule = /** @class */ (function () {
    function WrapperModule() {
    }
    return WrapperModule;
}());
WrapperModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [WrapperComponent],
                exports: [WrapperComponent]
            },] },
];
/**
 * @nocollapse
 */
WrapperModule.ctorParameters = function () { return []; };

exports.WrapperModule = WrapperModule;
exports.ɵa = WrapperComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-to-angular.umd.js.map
