import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { algorithms } from '../cipher.functions';
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
    { label: "Ceaser's Cipher", value: 'ceaser' }
  ]


  plaintext: string = '';
  ciphertext: string = '';
  selected: string = '';

  parameters: Parameter[] = [];

  encrypt() {
    let algorithm = algorithms[this.selected as keyof typeof algorithms].encryptFunction();
    try {
      this.ciphertext = algorithm(this.plaintext, this.parameters);
    }
    catch (e) {
      alert(e);
    }
  }

  setParameters() {
    if (this.selected === '') {
      this.parameters = [];
    } else {
      this.parameters = algorithms[this.selected as keyof typeof algorithms].parameters;
    }
  }
}
