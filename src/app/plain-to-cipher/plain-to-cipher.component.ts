import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { algorithms } from '../cipher.functions';

@Component({
  selector: 'app-plain-to-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plain-to-cipher.component.html'
})
export class PlainToCipherComponent {

  algorithmsList = [
    { label: "Ceaser's Cipher", value: 'ceaser' }
  ]

  plaintext: string = '';
  ciphertext: string = '';
  selected: string = '';

  encrypt() {
    let algorithm = algorithms[this.selected as keyof typeof algorithms].encryptFunction();
    try {
      this.ciphertext = algorithm(this.plaintext, 5);
    }
    catch (e) {
      alert(e);
    }
  }
}
