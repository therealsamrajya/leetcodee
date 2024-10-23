var ReverseWords = function(s)
{
     s= s.trim()

     let words = s.split(/\s+/)

     words.reverse()

     return words.join(" ")
}

console.log(ReverseWords("  Hello  World  ")); 