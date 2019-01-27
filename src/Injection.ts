import 'reflect-metadata';
import Container from './Container';

export function Inject(target: Object, propKey: string): any {
    var propType = Reflect.getMetadata('design:type', target, propKey);
    var descriptor = {
        get: function() {
            return Container.get(propType.name);
        }
    }

    return descriptor;
}

export function Injectable(service: any): any {
    Container.register(service.name, service);
}
