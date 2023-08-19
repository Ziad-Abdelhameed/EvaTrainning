import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent, product } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component';
import { InputNotificationComponent } from './input-notification/input-notification.component';
import { BoardComponent } from './board/board.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent, RxjsComponent, InputNotificationComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
