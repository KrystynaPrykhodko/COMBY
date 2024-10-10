import { Component } from '@angular/core';
import { NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms'; // FormsModule importieren
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  imports: [FormsModule],  // FormsModule hier hinzufügefügt
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css'],
  providers: [
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: '/vs',
        defaultOptions: { scrollBeyondLastLine: false },
      },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // <--- Hier hinzufügen
})
export class MonacoEditorComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\n  console.log("Hello world!");\n}';
}
