import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryModule } from './inventory/inventory.module';

import { UserModule } from './user/user.module';
import { NavbarComponent } from './navbar/navbar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    InventoryModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    ListboxModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
