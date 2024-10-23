var canPlantFlowers = function (flowers,n){
    let count = 0;
    for(i=0;i<flowers.length;i++)
    {
        if(flowers[i]===0 
            //checks if flower is already planted or not
            && (i==0 || flowers[i-1]==0)&&
            /*checks if the flower position is at the first since if it is first no need to change its left neighbour
             and it also make sures that its  left neighbour is empty or not */ 
            (i === flowers.length -1 || flowers[i+1] == 0))
            /* Checks if it is the last element because if it  is no need to check its right neighbour and if its not 
            it make sures that the right neighbour is empty or not */{
        
            flowers[i]=1;
            count++;
            if(count >= n )
            {
                return true; //returns true if all the flowers are planted
            }
        }
    }
    return count>=n // returns false if planting is not possible
}
let flowers = [1, 0, 0, 0, 1];
let n = 2;
console.log(canPlantFlowers(flowers, n)); 