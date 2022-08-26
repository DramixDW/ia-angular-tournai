import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactivFormComponent } from './reactiv-form/reactiv-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciceFormComponent } from './exercice-form/exercice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactivFormComponent,
    ExerciceFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
