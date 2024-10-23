var gcdstring =  function (word1,word2)
{
    if (word1 + word2 !== word2 + word1)
        {
            return ""
        } 

   const gcd = (a,b) => {
    if(b===0)
        return a;
    
    return gcd(b,a%b)
   }     
   let gcdLength = gcd(word1.length , word2.length)//calcualates the length of longest substring 

   return word1.substring(0,gcdLength) // substring param starting dekhi ka samma chaiyeko xa tya sama ko substring dinxa

}

console.log(gcdstring("ABC","ABD"));//op is " " as a+b != b+a
console.log(gcdstring("ABABAB", "ABAB")); //op is AB why(look at note.txt)
console.log(gcdstring("AB", "ABABA")); //op is AB