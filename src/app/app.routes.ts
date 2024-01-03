import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CipherToPlainComponent } from './cipher-to-plain/cipher-to-plain.component';
import { PlainToCipherComponent } from './plain-to-cipher/plain-to-cipher.component';

export const routes: Routes = [
    { path: '', component: PlainToCipherComponent },
    { path: 'plain', redirectTo: '' },
    { path: 'about', component: AboutComponent },
    { path: 'cipher', component: CipherToPlainComponent }
];
