import { Parameter } from "./models/parameter.model";
import { AES } from 'crypto-js';
import { DES } from 'crypto-js';
import { RC4 } from 'crypto-js';

export interface AlgorithmMetadata {
  name: string,
  parameters: Parameter[],
  encryptFunction(this: AlgorithmMetadata): (plaintext: string, parameters: any) => string;
}


export const algorithms = {
  'caeser': {
    name: "Ceaser's Cipher",
    parameters: [
      {label: 'K', description: 'Number of positions down the alphabet', type: 'number'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return caeserCipher(plaintext, parameters);
      }
    }
  },
  'blowfish': {
    name: "Blowfish",
    parameters: [
      {label: 'Key', description: 'Encryption key', type: 'string'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return blowfishCipher(plaintext, parameters);
      }
    }
  },
  'rc4': {
    name: "RC4",
    parameters: [
      {label: 'Public Key', description: 'RSA public key', type: 'string'},
      {label: 'Private Key', description: 'RSA private key', type: 'string'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return rc4Cipher(plaintext, parameters);
      }
    }
  },
  'vigenere': {
    name: "Vigenere",
    parameters: [
      {label: 'Key', description: 'Encryption key', type: 'string'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return vigenereCipher(plaintext, parameters);
      }
    }
  },
  'aes': {
    name: "AES",
    parameters: [
      {label: 'Key', description: 'Encryption key', type: 'string'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return aesCipher(plaintext, parameters);
      }
    }
  },
  'DES': {
    name: "DES",
    parameters: [
      {label: 'Key', description: 'Encryption key', type: 'string'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return desCipher(plaintext, parameters);
      }
    }
  }
}

function rc4Cipher(plaintext: string, parameters: Parameter[]): string {
  return RC4.encrypt(plaintext, parameters[0].value).toString();
}

function blowfishCipher(plaintext: string, parameters: Parameter[]): string {

  
  var ciphertext = '';
  return ciphertext;
}

function vigenereCipher(plaintext: string, parameters: Parameter[]): string {
  return '';
}

function aesCipher(plaintext: string, parameters: Parameter[]): string {
  return AES.encrypt(plaintext, parameters[0].value).toString();   
} 

function desCipher(plaintext: string, parameters: Parameter[]): string {
  return DES.encrypt(plaintext, parameters[0].value).toString();
}

function caeserCipher(plaintext: string, parameters: Parameter[]): string {
  var ciphertext = '';
  var plaintext = plaintext.toLocaleLowerCase();

  const parametersMap = buildParameters(parameters);
  const interval = {start: 97, end: 122};
  
  for (let index = 0; index < plaintext.length; index++) {
    let code = plaintext.charCodeAt(index);
    if (code >= interval.start && code <= interval.end) {    
      var charCode = code + Number(parametersMap['K']);

      if (charCode < interval.start) {
        charCode = charCode - interval.start + interval.end + 1;
      }
      ciphertext = ciphertext.concat(String.fromCharCode(charCode));
    } else if (code === 32) {
      ciphertext = ciphertext.concat(' ');
    } else {
      throw new Error('Wrong input format. Expecting only alphabet input.');
    }
  }
  return ciphertext;
}


function buildParameters(parameters: Parameter[]) {
  var parametersMap: any = {};
  for (let parameter of parameters) {
    let label = parameter.label;
    let value = parameter.value;

    parametersMap[label] = value;
  }

  return parametersMap;
}