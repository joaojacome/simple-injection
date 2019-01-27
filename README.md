# Simple Injection
## Usage
### To register a service
``` javascript
import { Injectable, Inject } from 'simple-injection';

@Injectable
class Test {
    private n: number = 0;

    public add(nx: number) {
        this.n += nx;

        return this.n;
    }
}
```

### To inject a service
``` javascript
import { Inject } from 'simple-injection';

class Test2 {
    @Inject injectedService !: Test;

    public testThisInjection(n: number) {
        let sum = this.injectedService.add(n);
        console.log(sum);
    }
}
```
