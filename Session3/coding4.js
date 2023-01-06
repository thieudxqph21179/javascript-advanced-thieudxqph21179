const calcTip =  function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
} 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const totals=[];
for(let i=0;i<bills.length;i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips,bills,totals);
const calcAverage = function(arr){
let tong = 0;
    for(let i=0;i<arr.length;i++){
        tong= tong + arr[i];
    }
    return tong/arr.length;

}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
