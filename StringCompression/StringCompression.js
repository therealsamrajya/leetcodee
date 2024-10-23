var compress = function(chars){
    let writeIndex = 0;
    let readIndex = 0;
    while(readIndex < chars.length)
    {
        let currentChar = chars[readIndex];
        let count = 0;

        //count number of occurence

        while(readIndex < chars.length && chars[readIndex] == currentChar){
            readIndex++
            count++

        }
        //write to the op array

        chars [writeIndex++]= currentChar
        
        if(count>1) // iterate through each elelemnt by converting it into a string
        {
            let countStr = count.toString()
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex++] = countStr[i];
            }
        }
    }
    return writeIndex
}


const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]