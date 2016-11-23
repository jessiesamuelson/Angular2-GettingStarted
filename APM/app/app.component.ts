// Import
// Before we use an external function or class we define where to find it
// import statement is part of es6 and implemented in typescript
// allows us to use exported members from external modules
// we can import from angular since it is made up of modules
// import: keyword
// Component: Angular library module name
// '@angular/core': Member name
import { Component } from '@angular/core'; 

// Metadata & Template
// @Component(): decorator built into angular2
// decorator is a function that takes an object
// selector: directive name used in HTML
// template: view layout
// {{}} data binding
@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <div>My First Component</div>
        </div>
    `
})
// ^^ no semicolon
// Class
// export keyword exports this file
// class keyword defines the class
// AppComponent: classname, by convention we end the name with Component
// AppComponent: component name when used in code
// Since this file is exported it will be loaded by our module loader
export class AppComponent {
    // Properties and methods go here

    // Property
    // pageTitle: Property name (camel case)
    // string: Data Type
    // 'Acme Product Management': Default Value
    pageTitle: string = 'Acme Product Management';
 }
