import ServiceInterface from './ServiceInterface';

export default class Container {
    private static serviceLocator:any = {};
    private static services:ServiceInterface = {};

    static load(services: ServiceInterface) {
        Container.services = services;
    }

    static get(service: string) {
        if (Container.serviceLocator[service]) {
            return Container.serviceLocator[service];
        }

        return Container.serviceLocator[service] = new Container.services[service].class();
    }

    static register(serviceName: string, serviceClass: Object) {
        Container.services[serviceName] = {
            class: serviceClass,
        };
    }
}
