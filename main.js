// let companies=["Mazda", "Microsoft", "Apple", "Google"];
// alert(companies);
// console.log(companies.length);
// let myFriends=[];
// console.log(myFriends.length);
// let infoMicrosoft=["Microsoft", 2019, true, "Computers"];
// console.log(infoMicrosoft);
// console.log(companies[5-1]);
let myStuff=["PC", "Bed", "Shoes"];
// console.log(myStuff[3-2]);
// let firstCompany=companies[0];
// console.log(firstCompany);
// let lastCompany=companies[companies.length-1];
// console.log(lastCompany);
// let lastIndex=companies.length - 1;
// console.log(companies[lastIndex]);

// let plants=["Oak", "Lilly", "Belladona", "Tulip", "Yew"];
// console.log("The first plant is " + plants[0] + ", and the last one is " + plants[plants.length-1] + ".");
// plants[0]=plants[1];
// console.log("Now The first plant is "+plants[0]+", and the second one is still "+plants[plants.length-1]+".");
// plants=["Rose", "Banana", "Bush", "Tree", "Rock"];
// console.log(plants);
// console.log(plants[1]);
// plants.push("Coconut");
// console.log(plants);
// plants.push("Blueberries", "Blackberries");
// console.log(plants);

// let employees=["Ben", "David", "John"];
// let candidates=["Mor", "Ron", "Omri"];
// console.log(employees);
// employees.push(...candidates); //employees.push(candidates[0], candidates[1], candidates[2]);
// console.log(employees);
// console.log(myStuff);
// myStuff.push(...myStuff);
// console.log(myStuff);
// let removedItems=myStuff.splice(4, 2);
// console.log(myStuff);
// console.log(removedItems);
// let myArray=["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"];
// // myArray.splice(1);
// console.log(myArray);
// myArray.splice(0, myArray.length - 1, "no life");
// console.log(myArray);
// console.log(myArray.length);

const genes=["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
// const newGenes= genes;
// console.log(genes);
// console.log(newGenes);
// console.log(newGenes.length);
// // let removedGene=newGenes.splice(2, 1);
// // console.log(newGenes.length);
// newGenes.push(newGenes[newGenes.length-1])
// console.log(newGenes);
//starting over with an empty array
const newGenes=[];
// newGenes.push(genes[0], genes[1], genes[genes.length-1], genes[2], genes[3], genes[3]);
const firstTwo=genes.splice(0, 2);
const lastGene=genes.splice(genes.length-1);
console.log(newGenes);
newGenes.push(...firstTwo, ...lastGene);
console.log(newGenes);
newGenes.push(genes[0]);
console.log(newGenes);
console.log(genes);
newGenes.push(genes[1], genes[1]);
console.log(newGenes);
newGenes.unshift("FXT");
console.log(newGenes);




