
interface AlgorithmMetadata {
  name: string,
  encryptFunction(this: AlgorithmMetadata): (plaintext: string, parameters: any) => string;
}


export const algorithms = {
  'ceaser': {
    name: "Ceaser's Cipher",
    encryptFunction: function (this: AlgorithmMetadata) {
      return (plaintext: string, parameters: any) => {
        return ceaserCipher(plaintext, parameters);
      }
    }
  }
}


function ceaserCipher(plaintext: string, k: number): string {
  var ciphertext = '';
  const interval = {start: 65, end: 122};

  for (let index = 0; index < plaintext.length; index++) {

    let code = plaintext.charCodeAt(index);
    if (code >= interval.start && code <= interval.end) {
      ciphertext = ciphertext.concat(String.fromCharCode(code + k));
    } else if (code === 32) {
      ciphertext = ciphertext.concat(' ');
    } else {
      throw new Error('Wrong input format. Expecting only alphabet input.');
    }
  }
  return ciphertext;
}