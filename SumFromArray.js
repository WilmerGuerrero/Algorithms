//Create a System to receive an array and number, you need to find in array two number
// that summary give you the second argument.

class SumFromArray{
   
    exampleArray = [1,2,3,4,5];
    
    findSumElements(array, result){
        for(let i=0;i<array.length;i++){
            for(let j=1;j<array.length; j++){
                if(array[i]+array[j]==result)
                    console.log(`The integers within the array that their sum is equal to ${result} are ${array[i]} and ${array[j]}`); 
                else
                    j++;
            }
        }            
    }
}

const findSumElementsFromArray = new SumFromArray();
findSumElementsFromArray.findSumElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10);