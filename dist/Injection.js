"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Container_1 = __importDefault(require("./Container"));
function Inject(target, propKey) {
    var propType = Reflect.getMetadata('design:type', target, propKey);
    var descriptor = {
        get: function () {
            return Container_1.default.get(propType.name);
        }
    };
    return descriptor;
}
exports.Inject = Inject;
function Injectable(service) {
    Container_1.default.register(service.name, service);
}
exports.Injectable = Injectable;
