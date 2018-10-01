import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChilisComponent } from './chilis/chilis.component';
import { ChiliDetailComponent } from './chili-detail/chili-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChilisComponent,
    ChiliDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
