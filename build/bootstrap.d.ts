import { Type, Provider, ComponentRef } from '@angular/core';
export declare function bootstrap(component: any, providers?: Array<Type | Provider | any[]>): Promise<ComponentRef<any>>;
export declare function MeteorApp(args?: any): (cls: any) => any;
export declare function defineMetadata(cls: Type, args?: any): void;
