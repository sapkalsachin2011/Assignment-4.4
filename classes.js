"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    __decorate([
        decorators_1.enumerable(false)
    ], Greeter.prototype, "greet", null);
    Greeter = __decorate([
        decorators_1.log
    ], Greeter);
    return Greeter;
}());
exports.Greeter = Greeter;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        return 'my message';
    };
    __decorate([
        decorators_1.enumerable(true)
    ], MyClass.prototype, "myMethod", null);
    MyClass = __decorate([
        decorators_1.log
    ], MyClass);
    return MyClass;
}());
exports.MyClass = MyClass;
//# sourceMappingURL=classes.js.map