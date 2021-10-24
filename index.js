
export function checkForRestrictedWords(inputStr)  {
  if ((inputStr.indexOf('wtf') >= 0) || (inputStr.indexOf('@$$') >= 0 || inputStr.indexOf('blahblah') >= 0)) {
    return true;
  }
  return false;
}