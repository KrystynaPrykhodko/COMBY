import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component'; // Importiere die Standalone-Komponente

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // MonacoEditorComponent wird hier nicht deklariert, da es standalone ist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Weil ich [(ngModel)] benutze
    MonacoEditorComponent, // Importiere die Standalone-Komponente hier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
