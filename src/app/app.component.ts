import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'evaTraining2';
  @ViewChild(ProductsComponent) child: ProductsComponent;

  isClicked: boolean = false;

  ourProducts: any = [];
  sendDataFromApp() {
    this.ourProducts = this.child.renderValues();
    this.isClicked = true;
  }
}
