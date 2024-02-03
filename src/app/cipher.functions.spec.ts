import { algorithms } from "./cipher.functions";

describe('ceasear cipher test suite', () => {

  it('encrypt using k equals to 2', () => {
    const expectedResult = 'cvvcem cv fcyp';
    const plaintext: string = 'attack at dawn'

    let ceaserEncrypt = algorithms.caeser.encryptFunction();

    expect(ceaserEncrypt(plaintext, [{label: 'K', value: 2}])).toEqual(expectedResult);
  });

  it('decrypt using k equals to -2', () => {
    const expectedResult = 'attack at dawn';
    const plaintext: string = 'cvvcem cv fcyp'

    let ceaserEncrypt = algorithms.caeser.encryptFunction();

    expect(ceaserEncrypt(plaintext, [{label: 'K', value: -2}])).toEqual(expectedResult);
  });

});