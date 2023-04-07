// complete the given function

function palindrome(str){
const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
   if(alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('')){
  return true;
        }
        else{
          return false;
        }
}
module.exports = palindrome
