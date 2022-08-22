import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonSuperComposantComponent } from './mon-super-composant/mon-super-composant.component';
import { MonDeuxiemeComposantComponent } from './components/mon-deuxieme-composant/mon-deuxieme-composant.component';
import { FormsModule, NgForm } from '@angular/forms';
import { BingoPipe } from './bingo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonSuperComposantComponent,
    MonDeuxiemeComposantComponent,
    BingoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
