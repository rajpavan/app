import { Injector } from "@angular/core";

let _injector: Injector = null;

export function setInjector(value: Injector): void {
    _injector = value;    
}

export function getInjector(): Injector {
    return _injector;    
}
