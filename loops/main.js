// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// console.log(companies[0]);
// for(let companyIndex in companies){
//     console.log(companies[companyIndex]);
// }
// for(let companyIndex in companies){
//     console.log(companyIndex);
// }
// for(let companyIndex of companies){
//     console.log("one day i will work at " + companyIndex);
// }
// for(let i = 80; i <= 100; i += 2){
//     console.log(i)
// }

//EXERCISE:
let namesArray = ["Ben", "Adi", "Debi"];
let agesArray = [25, 33, 35];
for(let index in namesArray){
    console.log(namesArray[index] + " is " + agesArray[index] + " years old.");
}

let numbersArray = [1, 1 ,1 ,1 ,1]
let sum = 0
for(let i = 0; i <numbersArray.length; i++){
    let tempSum = (numbersArray[i] += numbersArray[i+=1]);
    sum += tempSum;
    console.log(sum);
}