function getMaxSubSum(arr){
    let sum=0,maxi=0;
    for(let num of arr){
        maxi+=num;
        sum=Math.max(sum,maxi);
        if(maxi<0)
            maxi=0;
    }
    return sum;
}
let arr = [1, -2, 3, 4, -9, 6];
let ans = getMaxSubSum(arr);
console.log(ans);
