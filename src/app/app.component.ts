import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { algorithms } from './cipher.functions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {

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
    catch(e) {
      alert(e);
    }
    
  }

}
