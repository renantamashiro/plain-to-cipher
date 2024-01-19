import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlgorithmMetadata, algorithms } from '../cipher.functions';
import { Parameter } from '../models/parameter.model';

@Component({
  selector: 'app-plain-to-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plain-to-cipher.component.html',
  styleUrl: './plain-to-cipher.component.scss'
})
export class PlainToCipherComponent {

  algorithmsList = [
    { label: "Caeser's Cipher", value: 'caeser' }
  ];


  plaintext: string = '';
  ciphertext: string = '';
  selected: string = '';
  algorithm: AlgorithmMetadata | undefined;

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
    }
  }
}
