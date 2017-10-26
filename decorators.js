"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class Decorator
function log(target) {
    console.log('log() invoked. Class:', target);
}
exports.log = log;
// Method Decorator
function enumerable(value) {
    console.log('enumerable() invoked.');
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
        console.log("  target: " + JSON.stringify(target) + ", propertyKey: " + propertyKey + ", descriptor: " + JSON.stringify(descriptor));
    };
}
exports.enumerable = enumerable;
//# sourceMappingURL=decorators.js.map