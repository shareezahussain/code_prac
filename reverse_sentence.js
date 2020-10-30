//Reverse a simple words-only sentence ("bob likes dogs" -> "dogs likes bob")

const string_reverse = (sentence)=>{
  
  let words = sentence.split(" ");
  let new_sentence = "";
  
  for(let i=words.length-1; i>=0; i--){
    
     new_sentence +=  words[i] + " ";
  }
  
  return new_sentence;
}

console.log(string_reverse("bob likes dogs"));
