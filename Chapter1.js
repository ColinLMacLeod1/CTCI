switch(process.env.QUESTION){
  case '1.3':
    URLify('This is a URL')
    break
  case '1.6':
    stringComp('abbbbbbcdeee')
    break
  default:
    console.log('Select a Question')

}

// 1.3   URLify a stringComp

function URLify(str) {
  var newStr = ''
  for(var i=0; i < str.length; i++) {
    if(str[i] == ' ') newStr += '%20'
    else newStr += str[i]
  }
  console.log(newStr)
}

// 1.6   String Compression (aaaabb -> a3b2)

function stringComp(str) {
  var newStr = ''
  for(var i=0; i < str.length; ){
    currentLetter = str[i]
    var j = i+1;
    while(str[j] == currentLetter){
      j++
    }
    count = j-i
    newTerm = currentLetter + count.toString()
    newStr += newTerm
    i += count
  }
  if(str.length <= newStr.length) console.log(str)
  else console.log(newStr)
}
