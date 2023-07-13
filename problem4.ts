function meanMedian(arrayInput : number[]): string{
    const length = arrayInput.length;
    const mean = arrayInput.reduce((sum, num) => sum + num, 0) / length;
    const median = 
        length % 2 === 0
        ? (arrayInput[length / 2-1] + arrayInput[length /2]) / 2
        : arrayInput[Math.floor(length / 2)];
        return `${mean.toFixed(1)} ${median.toFixed(1)}`;
}

console.log(meanMedian([1,2,3,4]))