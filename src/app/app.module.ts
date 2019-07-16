import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [AppComponent, HeroFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
