import { Type, Provider, ComponentRef } from 'angular2/core';
export declare function bootstrap(component: any, providers?: Array<Type | Provider | any[]>): Promise<ComponentRef>;
export declare function MeteorApp(args?: any): (cls: any) => any;
export declare function defineMetadata(cls: Type, args?: any): void;
