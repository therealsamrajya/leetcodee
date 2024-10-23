var kidsCndies = function (candies,extracandies)
{
   let result=[]
    let maxcandies = Math.max(...candies) //spreading candies means we are  doing max(1,2,3) taking all elements in array and passing them as a single argument
    for(i=0;i<candies.length;i++)
    {
        if(candies[i]+extracandies >= maxcandies)
        result.push(true)

        else{
        result.push(false)            
        }

    }
       
    return result
}
let candies=[4,2,1,1,2]
let extracandies=1;
console.log(kidsCndies(candies,extracandies));


