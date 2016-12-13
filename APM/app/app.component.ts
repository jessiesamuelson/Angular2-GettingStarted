
// Import
// Before we use an external function or class we define where to find it
// import statement is part of es6 and implemented in typescript
// allows us to use exported members from external modules
// we can import from angular since it is made up of modules
// import: keyword
// Component: Angular library module name
// '@angular/core': Member name
import { Component, NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Metadata & Template
// @Component(): decorator built into angular2
// decorator is a function that takes an object
// selector: directive name used in HTML (prefix with something relevant to app, in this case product management)
// template: view layout
// {{}} data binding
@Component({
  selector: 'pm-app',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div class="panel panel-primary">
        <!--Heading-->
        <div class="panel-heading">
            {{productPageTitle}}
        </div>
        <!--Body-->
        <div class="panel-body">
          <!--Filter-->
          <div class="row">
            <div class="col-md-2">Filter by:</div>
            <div class="col-md-4">
                <input type='text'

                />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <h3>Filtered by: {{listFilter}}</h3>
            </div>
          </div>
          <!--Table-->
          <div class="table-responsive">
            <table class="table"
                   *ngIf='products && products.length'>
              <thead>
                <tr>
                  <th>
                    <button class="btn btn-primary"
                            (click)='toggleImage()'>
                      {{showImage ? 'Hide' : 'Show'}} Image
                    </button>
                  </th>
                  <th>Product</th>
                  <th>Code</th>
                  <th>Available</th>
                  <th>Price</th>
                  <th>5 Star Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor='let product of products'>
                  <td>
                    <img
                      *ngIf='showImage'
                      [src]='product.imageUrl'
                      [title]='product.productName | uppercase'
                      [style.width.px]='imageWidth'
                      [style.margin.px]='imageMargin'>
                  </td>
                  <td>{{product.productName}}</td>
                  <td>{{ product.productCode | lowercase }}</td>
                  <td>{{ product.releaseDate }}</td>
                  <td>{{ product.price | currency:'USD':true:'1.2-2' }}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  inputs: ['ProductListComponent']
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
  productPageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
  // Method
  // Has no return type so we use void
  toggleImage(): void {
    this.showImage = !this.showImage
  }
 }
