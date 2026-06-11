// //FULL DISCLAIMER
// //---------------
// // The following content was made for learning purposes only.
// // We had crazy ideas.
// // There is no intention or meaning here.
// // Just some code.


// let fruits = ["banana", "apple", "pear"]
// fruits.push("grapes")




// for (let i = 0; i<fruits.length;i++){
//     console.log(fruits[i])
// }
// console.log("ding dong! SOMEONE'S AT YOUR FRONT YARD DOORBELL")
// fruits.pop()
// for (let i = 0; i<fruits.length;i++){
//     console.log(fruits[i])
// }
// function happy (x){
//     if (x>0){
//         for(let i = 0;i<=x;i++){
//             console.log("HAPPY")  
//         }
//     }
//     else{
//         console.log("BRUH STOP BEING SAD")
//         console.log("WHY IS YOUR HAPPINESS LEVEL "+x+"!!! THATS BAD!!! ")
//         return
//     }
//     console.log("YAY YOUR HAPPINESS LEVEL IS "+x+"!!! I AM MR.COMPUTER PROGRAM AND NOW I AM HAPPY!!! YES COMPUTERS HAVE EMOTIONS...")   
// }

// // function myAlert(message){
// //     alert(message)
// // }

// // function myConsole(message){
// //     console.log(message)
// // }
// //function alarm1(x)
// //    let silentMode = x
// //    if (silentMode == true){
// //        myConsole("YOU ARE BEING CALLED BY YOUR WORST ENEMY")
// //    }
// //    else{
// //        myAlert("YOUR WORST ENEMY IS CALLING!!! YOUR WORST ENEMY IS CALLING!!!")
// //    }

// function alarm2(alarmMethod){
//     const beingRobbed = true;
//     if(beingRobbed){
//         alarmMethod("GUNS ENGAGED. LOCKED AND LOADED. STAND DOWN THIEF, OR YOU WON'T LEAVE HERE ALIVE!")
//     }
// }

// function buffet(eatingFunction){
//     const random = random()

//     for( let i = 0; i < random; i++){
//         eatingFunction()
//     }

// }

// function brandonEats(){
//     console.log("Wow, I love food")
//     weight += 5;
// }

// function rohanEats(rohanWeight,cakeWeight){
//     console.log("YUMMY")
//     console.log("Rohan is eating a cake of this weight:"+cakeWeight+"lb!")
//     console.log("YUMMY")
//     rohanWeight += cakeWeight
// }

// rohanEats(100,1000)

// const myFunction = (message) => console.log(message)
// const cursed = (param) => {
//     console.log(param)
//     for(let i = 0; i < 10; i++){
//         console.log("hi")
//     }
// }

// alarm2(myFunction)
// function rohanEatsBullets(rohanWeight,bulletWeight){
//     console.log("Rohan is eating bullets of this weight:"+bulletWeight+"lb!")
//     console.log("YUMMY")
//     rohanWeight += bulletWeight
// }
// rohanEatsBullets(100,100)


// // onClick = () => {
// //     1. go to that link
// //     2. go buy something on user's credit card
// //     3. update leaderboard
// // }

// // button

// // if( button clicked)
// //     go to google.com
// // else if
// //     go to youtube.com


// function payIRS(paymentMethod){
//     moneytoIRS = "A BIG NUMBER"
//     const amountLostToStupidMoneySuckingGovernments = paymentMethod()
//     console.log("From the IRS thank you for paying $"+amountLostToStupidMoneySuckingGovernments)
// }
// const normalPerson = (x) =>{
//     return Math.random()*1000000
// }
// const taxEvader = (x) =>{
//     getCaught = Math.random()
//     if (getCaught <= 0.5){
//         return 0
//     }
//     else{
//         return Math.random()*1000000+500000
//     }
// }
// console.log("-------------------------------------------------------")
// console.log("NEW STORY!!!")
// payIRS(normalPerson)
// payIRS(taxEvader)

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 


class Animal{
    constructor(legs,reaction,name,averageLifespan, pounds){
        this.legs = legs
        this.reaction = reaction
        this.name = name
        this.averageLifespan = averageLifespan
        this.asleep = false
        this.pounds = pounds

    }
    walk(){
        console.log(`${this.name} IS WALKING WITH ${this.legs} legs!!! ${this.reaction}`)
    }
    sleep(){
        this.asleep = true
        console.log(`${this.name} is now asleep!`)
    }
    wakeUp(){
        this.asleep = false
        console.log(`${this.name} is now awake!`)
    }
    fact(){
        console.log(`The average lifespan for ${this.name} is ${this.averageLifespan}`)
    }
    eat(){
       console.log(`${this.pounds} pounds! That ${this.name} just had a GREAT meal.`)
       return this.pounds
    }
}

class CreepyFictionalRealityBendingAnimal extends Animal{
    sleep(){
        console.log("THIS ANIMAL DOES NOT SLEEP! It simply... watches.")
    }
}

class Chicken extends Animal{
    constructor(legs,reaction,name,averageLifespan, pounds){
        super(legs,reaction,name,averageLifespan, pounds)
        this.egglayingtime = false
    }
timeToLayEggChange(){
    this.egglayingtime = !this.egglayingtime
}
layEgg(){
    if(this.egglayingtime = true){
        console.log("The chicken has successfully laid an egg!")
    }
    else{
        console.log("Oh no! It wasn't able to lay eggs. It simply wasn't the time for it!")
        }
    }
}

class Dog extends Animal{
constructor(legs,reaction,name,averageLifespan, pounds){
    super(legs,reaction,name,averageLifespan, pounds)
    this.dogwantstobark = this.dogwantstobark
}
bark(){
this.dogwantstobark = Math.random()
if (this.dogwantstobark < 0.49){
    console.log("Right now, you wanted the dog to bark. It, however, didn't want to")
}
else if(this.dogwantstobark > 0.51){
console.log("The dog wants to bark. WOOF!")
}
else{
    console.log("You have come across the rare scenario of the all powerful dog.")
    console.log("The dog has transcended normal bounds. It has now defeated the hakehaalah, instantly. It has boundless, infinite intelligence. You are lucky to be his companion, or rather, now, servant. I have been observing from an angle not even known to this godlike dog, but I will leave you with a warning. DO NOT DISOBEY THE DOG.")
}
 }
}
class Safari{
    constructor(){
        this.area = ""
        this.possibleAreas = ["IDK", "Farm"]
    }
    timerLoopThatRunsEveryFrame(){   
    }
    area = randint(0,2)
    if (area = 0){
         
    }
}












