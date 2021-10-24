const RESTRICTED = [ 'wtf',  '@$$', 'blahblah' ];

export function checkForRestrictedWords(inputStr)  {
  const found = RESTRICTED.filter(word => {
    return inputStr.indexOf(word) >= 0;
  });

  return found.length > 0;
}