function boolToWord( bool ){

  return bool == true ? "Yes" : (bool == false ? "No" : "Input must be a boolean value - true or false")
}


module.exports = boolToWord;
