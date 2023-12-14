import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './Pages/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatFormFieldModule } from '@angular/material/form-field';
import { RegesterComponent } from './Pages/regester/regester.component';
import { AuthInterceptorService } from './shared/auth-intreceptor.service';
import {MatChipsModule} from '@angular/material/chips';
import { HomeComponent } from './Pages/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MaterialModule } from './material.module';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    RegesterComponent,
    HomeComponent
  ],
  imports: [
    
    NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    CarouselModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatChipsModule,
    CarouselModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
