"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// This directive is used inside the <mat-table> used in the Linguists page.
// It allows you to create a vertically-collapsible detail row, which becomes
// visible when you click on any row in the table.
var CollapsibleDetailRowDirective = /** @class */ (function () {
    function CollapsibleDetailRowDirective(vcRef) {
        this.vcRef = vcRef;
        this.toggleChange = new core_1.EventEmitter();
    }
    Object.defineProperty(CollapsibleDetailRowDirective.prototype, "expended", {
        get: function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapsibleDetailRowDirective.prototype, "collapsibleDetailRow", {
        set: function (value) {
            if (value !== this.row) {
                this.row = value;
                // this.render();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapsibleDetailRowDirective.prototype, "template", {
        set: function (value) {
            if (value !== this.tRef) {
                this.tRef = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CollapsibleDetailRowDirective.prototype.onClick = function () {
        this.toggle();
    };
    CollapsibleDetailRowDirective.prototype.toggle = function () {
        if (this.opened) {
            this.vcRef.clear();
        }
        else {
            this.render();
        }
        this.opened = this.vcRef.length > 0;
        this.toggleChange.emit(this);
    };
    CollapsibleDetailRowDirective.prototype.render = function () {
        this.vcRef.clear();
        if (this.tRef && this.row) {
            this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
        }
    };
    __decorate([
        core_1.HostBinding('class.expanded')
    ], CollapsibleDetailRowDirective.prototype, "expended", null);
    __decorate([
        core_1.Input()
    ], CollapsibleDetailRowDirective.prototype, "collapsibleDetailRow", null);
    __decorate([
        core_1.Input('collapsibleDetailRowTpl')
    ], CollapsibleDetailRowDirective.prototype, "template", null);
    __decorate([
        core_1.Output()
    ], CollapsibleDetailRowDirective.prototype, "toggleChange", void 0);
    __decorate([
        core_1.HostListener('click')
    ], CollapsibleDetailRowDirective.prototype, "onClick", null);
    CollapsibleDetailRowDirective = __decorate([
        core_1.Directive({
            selector: '[collapsibleDetailRow]'
        })
    ], CollapsibleDetailRowDirective);
    return CollapsibleDetailRowDirective;
}());
exports.CollapsibleDetailRowDirective = CollapsibleDetailRowDirective;
