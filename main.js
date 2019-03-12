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

// const genes=["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
// // const newGenes= genes;
// // console.log(genes);
// // console.log(newGenes);
// // console.log(newGenes.length);
// // // let removedGene=newGenes.splice(2, 1);
// // // console.log(newGenes.length);
// // newGenes.push(newGenes[newGenes.length-1])
// // console.log(newGenes);
// //starting over with an empty array
// const newGenes=[];
// // newGenes.push(genes[0], genes[1], genes[genes.length-1], genes[2], genes[3], genes[3]);
// const firstTwo=genes.splice(0, 2);
// const lastGene=genes.splice(genes.length-1);
// console.log(newGenes);
// newGenes.push(...firstTwo, ...lastGene);
// console.log(newGenes);
// newGenes.push(genes[0]);
// console.log(newGenes);
// console.log(genes);
// newGenes.push(genes[1], genes[1]);
// console.log(newGenes);
// newGenes.unshift("FXT");
// console.log(newGenes);

//NOW OBJECTS

// let car = {
//     color: "black",
//     numWheels: 4,
//     isFancy: false
// }
// if(car.isFancy){
//     console.log("The car is " + car.color + ", has " + car.numWheels + " and it is really fancy!");
// }else{
//     console.log("The car is " + car.color + ", has " + car.numWheels + " wheels" + " and it is not very fancy.");
// }

// let fridge = {
//     item: "bread",
//     toBeginning: false,
//     items: ["eggs", "veggies", "fruits"]
// }
// if(fridge.toBeginning){
//     fridge.items.unshift(fridge.item);
// }else{
//     fridge.items.push(fridge.item);
// }
// console.log(fridge["items"]);

// const human = {
//     age: 0
// }
// const babyNameKey = "name"
// const babyNameValue = "Goojibear"
// human[babyNameKey] = babyNameValue;
// // human.babyNameKey = babyNameValue; // the object think that the key name is babyNameKey
// console.log(human);
// human["babyNameKey"] = "Ben";
// console.log(human);

// const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: [                   // an array with objects in it!
//       {item: "Pen", count: 2},
//       {item: "Bottle", count: 1},
//       {item: "Book", count: 3}
//     ]
//   }
//   console.log(bag.items[0].item);

//EXERCISE

let p1 = {
    name: "Ben",
    age: 25,
    city: "Rishon"
}
let p2 = {
    name: "shay",
    age: 25,
    city: "Telaviv"
}
console.log(p1, p2);
if(p1.age == p2.age){
    if(p1.city == p2.city){
        console.log("Ben wanted to date Shay");
    }else{
        console.log("Ben wanted to date Shay but couldnt");
    }
}else{
    console.log("Ben wont date Shay cuz they are not at the same age");
}
let myList = [
    {name: "Ben", age: 25},
    {name: "Shay", age: 24}
]
myList[0].name = "NewName";
console.log(myList[0].name);
myList.splice(1);
console.log(myList[0]);
console.log(myList[1]);
let myList2 = [
    {name: "Don", age: 23},
    {name: "Idan", age: 22}
]
myList.push(...myList2);
console.log(myList);
let library = {
    books: [
        {title: "GOT", author: "Jeorge R.R Martin"},
        {title: "HarryPotter", author: "J.K.Rowling"},
        {title: "LOTR", author: "John R.R Tolkien"}
    ]
}
console.log(library);
myList.push(...library.books);
console.log(myList);

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
  if(name == "Bob"){
    if(reservations.Bob.claimed){
        console.log("claimed");
    }else{
        console.log("unclaimed");
    }
  }else if(name =="Ted"){
      if(reservations.Ted.claimed){
          console.log("claimed");
      }else{
          console.log(unclaimed);
      }
  }else{
      console.log("no reservations for this name");
  }


































