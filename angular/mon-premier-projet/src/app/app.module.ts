import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonSuperComposantComponent } from './mon-super-composant/mon-super-composant.component';
import { MonDeuxiemeComposantComponent } from './components/mon-deuxieme-composant/mon-deuxieme-composant.component';
import { FormsModule, NgForm } from '@angular/forms';
import { BingoPipe } from './bingo.pipe';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonSuperComposantComponent,
    MonDeuxiemeComposantComponent,
    BingoPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
