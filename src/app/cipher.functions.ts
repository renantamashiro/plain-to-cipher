

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
    return plaintext;
}