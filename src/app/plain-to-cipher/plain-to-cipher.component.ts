import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlgorithmMetadata, algorithms } from '../cipher.functions';
import { Parameter } from '../models/parameter.model'
import { HttpClient } from '@angular/common/http';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-plain-to-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './plain-to-cipher.component.html',
  styleUrl: './plain-to-cipher.component.scss',
  providers: [provideMarkdown()]
})
export class PlainToCipherComponent {

  constructor(private http: HttpClient) {

  }

  algorithmsList = [
    { label: "Caeser's Cipher", value: 'caeser' },
    { label: 'Vigenere Cipher', value: 'vigenere' },
    { label: 'AES', value: 'aes'},
    { label: 'DES', value: 'des'},
    { label: 'RSA', value: 'rsa'},
    { label: 'Blowfish', value: 'blowfish'}
  ];

  plaintext: string = '';
  ciphertext: string = '';
  selected: string = '';
  selectedInputType: string = '';
  algorithm: AlgorithmMetadata | undefined;

  markdown: any;
  parameters: Parameter[] = [];

  encrypt() {
    let cipherFunction = algorithms[this.selected as keyof typeof algorithms].encryptFunction();
    try {
      this.ciphertext = cipherFunction(this.plaintext, this.parameters);
    }
    catch (e) {
      alert(e);
    }
  }

  setParameters() {
    if (this.selected === '') {
      this.parameters = [];
      this.ciphertext = '';
      this.algorithm = undefined;
    } else {
      this.algorithm = algorithms[this.selected as keyof typeof algorithms];
      this.parameters = algorithms[this.selected as keyof typeof algorithms].parameters;
      this.http.get(`../../assets/${this.selected}.md`, { responseType: 'text' }).subscribe(r => this.markdown = r);
    }
  }

  getInputTypeClass(inputType: string) {
    if (this.selectedInputType === inputType) {
      return 'selected-input-type';
    } else {
      return 'option-box';
    }
  }

  selectInputType(inputType: string) {
    this.selectedInputType = inputType;

    if (inputType === 'json') {
      this.createJsonTemplate();
    }
  }

  createJsonTemplate() {
    this.plaintext = JSON.stringify(JSON.parse(this.plaintext), undefined, 4);
  }
}

