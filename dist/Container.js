"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.load = function (services) {
        Container.services = services;
    };
    Container.get = function (service) {
        if (Container.serviceLocator[service]) {
            return Container.serviceLocator[service];
        }
        return Container.serviceLocator[service] = new Container.services[service].class();
    };
    Container.register = function (serviceName, serviceClass) {
        Container.services[serviceName] = {
            class: serviceClass,
        };
    };
    Container.serviceLocator = {};
    Container.services = {};
    return Container;
}());
exports.default = Container;
