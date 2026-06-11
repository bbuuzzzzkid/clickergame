function randint(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 


class Animal{
  legs:number;
  reaction:string;
  name:string;
  averageLifespan:number
  asleep:boolean
  pounds: number
    constructor(legs:number,reaction:string,name:string,averageLifespan:number, pounds: number){
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
  egglayingtime:boolean
    constructor(legs:number,reaction:string,name:string,averageLifespan:number, pounds: number){
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
constructor(legs:number,reaction:string,name:string,averageLifespan:number, pounds: number){
    super(legs,reaction,name,averageLifespan, pounds)
}
bark(){
 let dogwantstobark = Math.random()
if (dogwantstobark < 0.49){
    console.log("Right now, you wanted the dog to bark. It, however, didn't want to")
}
else if(dogwantstobark > 0.51){
console.log("The dog wants to bark. WOOF!")
}
else{
    console.log("You have come across the rare scenario of the all powerful dog.")
    console.log("The dog has transcended normal bounds. It has now defeated the hakehaalah (a mythical creature that is incredibly hard to kill), instantly. It has boundless, infinite intelligence. You are lucky to be his companion, or rather, now, servant. I have been observing from an angle not even known to this godlike dog, but I will leave you with a warning. DO NOT DISOBEY THE DOG.")
}
 }
}

type Area = "IDK"| "Farm"| "Dog park (mysteriously off somehow)"

class Safari{
  thisArea:Area
    constructor(){
        this.thisArea = "IDK"
    }

   handleIDK(){
   }

  handleDogPark(){
    console.log("Welcome to the dog park! We are not ominous at all...")
    let dogSighting = Math.random()
    if (dogSighting<0.51){
      console.log("You cannot get a good close contact with a dog!!!")
    }
    else{
      console.log("You can get close to a dog!")
      let dog = new Dog(4, "SO CUTE!!!","Doggie", 20, 1.5)
      dog.bark()
    }
  }
handleFarm(){
console.log("")
    let chickenSighting = Math.random()
    if (chickenSighting<0.51){
      console.log("You cannot get a good view of what the chicken is doing!!!")
  }
    else{
      console.log("You can see what the chicken is doing!")
      let chicken = new Chicken(2, "YUMMY", "Dinner", 2.5, 6)
      chicken.layEgg()
      chicken.timeToLayEggChange()
      chicken.layEgg()

  }
}


timerLoopThatRunsEveryFrame(){ 
      switch(this.thisArea){
        case "IDK":
          this.handleIDK()
          break
        case "Farm":
          this.handleFarm()
          break
        case "Dog park (mysteriously off somehow)":
          this.handleDogPark()
          break
        default:
          console.log("AAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
      }
    }
}
