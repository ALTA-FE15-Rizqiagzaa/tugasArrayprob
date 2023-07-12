function joinArrayRemoveDuplicate(arrayA : string[], arrayB: string[]): string[]{
    const combinedArray = [...arrayA, ...arrayB];

    const uniqueArray = Array.from(new Set(combinedArray));
    return uniqueArray;
}
console.log(joinArrayRemoveDuplicate(["apel","anggur"],["lemon","leci","nanas"]));
//output : ["apel","anggur","lemon","leci","nanas"]

console.log(joinArrayRemoveDuplicate(["samsung","apple"],["apple","sony","xiaomi"]));
//output --> ["samsung","apple,"sony","xiaomi"]

console.log(joinArrayRemoveDuplicate(["football","basketball"],["basketball","football"]))
