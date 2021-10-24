import { checkForRestrictedWords } from './index.js';
/**
 * The following words should be considered 'restricted':
 *    - 'wtf'
 *    - '@$$'
 *    - 'blahblah'
 */
describe('Restricted Word Checker', () => {
  it('should return false if the string does not contain a restricted word', () => {
    const response = checkForRestrictedWords('no bad words here');
    expect(response).toEqual(false);
  });

  it("should return true if the string contains 'wtf'", () => {
    const response = checkForRestrictedWords('test wtf test');
    expect(response).toEqual(true);
  });

  it("should return true if the string contains '@$$'", () => {
    const response = checkForRestrictedWords('you should not say @$$');
    expect(response).toEqual(true);
  });
});