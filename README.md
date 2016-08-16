# angular2-meteor-auto-bootstrap

This package handle the automatic bootstrap for Angular2-Meteor applications.

**Without** this package, your components should look like that: (with the `viewProviders` in each one of them)
````js
@Component({
    selector: 'my-comp',
    viewProviders: [
        IterableDiffers.extend([new MongoCursorDifferFactory()])
    ]
})
@View({
    directives: [NgFor],
    templateUrl: 'my-comp.html'
})
export class MyComponent extends MeteorComponent {

}
````

Bootstrapper for Angular2-Meteor apps.

It adds behind the scene required Angular 2 and Meteor modules for the Angular 2 dynamic module bootstrapping.

In order to use this package, first make sure to install all the required dependecies:
````
npm install @angular/common
npm install angular2-meteor
npm install angular2-meteor-auto-bootstrap
````

And then import the `bootstrap` from THIS package:
````js
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
````

And then just init it like any other Angular 2 application, using the `bootstrap` function:
````js
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [Transactions]
})
export class Main { }

bootstrap(Main);
````

For more examples and working code, please refer to the `/examples/` folder in this repo.
