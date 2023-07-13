function removeDuplicate(array: number[]): number{
    let uniqueCount = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] !== array[i + 1]){
            array[uniqueCount] = array[i];
            uniqueCount++
        }
    }
    return uniqueCount;
}


console.log(removeDuplicate([2,3,6,9,9]))