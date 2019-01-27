# Simple Injection

## tsconfig.json
` 
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
`

## Usage
### To register a service
`
import { Injectable, Inject } from 'simple-injection';

@Injectable
class Test {
    private n: number = 0;

    public add(nx: number) {
        this.n += nx;

        return this.n;
    }
}
`

### To inject a service
`
import { Inject } from 'simple-injection';

class Test2 {
    @Inject injectedService !: Test;

    public testThisInjection(n: number) {
        let sum = this.injectedService.add(n);
        console.log(sum);
    }
}
`
