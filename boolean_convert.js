function boolToWord( bool ){
  
  // if(bool == true) {
  //   return "Yes"
  // } else if(bool == false) {
  //   return "No"
  // } else {
  //   return "Input must be a boolean value - true or false"
  // }

  return bool == true ? "Yes" : (bool == false ? "No" : "Input must be a boolean value - true or false")
}


module.exports = boolToWord;
