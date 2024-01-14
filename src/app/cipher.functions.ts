import { LowerCasePipe } from "@angular/common";
import { Parameter } from "./models/parameter.model";

interface AlgorithmMetadata {
  name: string,
  parameters: Parameter[],
  encryptFunction(this: AlgorithmMetadata): (plaintext: string, parameters: any) => string;
}


export const algorithms = {
  'ceaser': {
    name: "Ceaser's Cipher",
    parameters: [
      {label: 'K', description: 'Number of positions down the alphabet', type: 'number'}
    ],
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return ceaserCipher(plaintext, parameters);
      }
    }
  }
}


function ceaserCipher(plaintext: string, parameters: Parameter[]): string {
  var ciphertext = '';
  var plaintext = plaintext.toLocaleLowerCase();

  const parametersMap = buildParameters(parameters);
  const interval = {start: 97, end: 122};
  
  for (let index = 0; index < plaintext.length; index++) {
    let code = plaintext.charCodeAt(index);
    if (code >= interval.start && code <= interval.end) {    
      var charCode = code - Number(parametersMap['K']);

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