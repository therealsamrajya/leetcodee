var ReverseVowels = function (s){
    const vowels =  new Set(["a","e","i","o","u","A","E","I","O","U"])
    let arr = s.split("")
    let i = 0;
    let j = arr.length-1

    while(i<j)
    {
        // while(i<j && !vowels.has(arr[i])){
        //     i++;
        // }

        // while(i<j && !vowels.has(arr[j])){
        //     j--;
        // } 

        // if(i<j)
        // {
        //     [arr[i],arr[j]]= [arr[j],arr[i]]
        //     i++;
        //     j--;
        // }

        if(vowels.has(arr[i]) && vowels.has(arr[j])) 
        {
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }

        else if (!vowels.has(arr[i]))
        {
            i++;
        }
        else{
            j--
        }
    }
    return arr.join("")
}
console.log(ReverseVowels("haietu"));
