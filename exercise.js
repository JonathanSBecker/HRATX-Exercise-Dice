const exercises = {
  "leg lifts": [6, "reps"],
  "jumping jacks": [24, "seconds"],
  "pushups": [6,"reps"],
  "walking lunges": [8, "reps"],
  "squats": [10, "reps"],
  "crunches": [12, "seconds"],
  "buttefly kicks": [12, "seconds"],
  "crocodile crawls": [4, "reps"],
  "wall sits": [12, "seconds"],
  "plank": [12, "seconds"],
  "mountain climbers": [18, "seconds"],
  "egg beaters": [12, "seconds"],
  "reverse lunges": [6, "reps"],
  "bear crawls": [8, "reps"],
  "gorilla crawls": [6, "reps"],
  "crab walks": [6, "reps"],
  "squat walking": [8, "reps"],
  "diamond pushups": [5, "reps"],
  "decline pushups": [5, "reps"],
  "divebombers": [6, "reps"],
  "tricep dips": [5, "reps"]
}

const keys = Object.keys(exercises);
const exercise = keys[Math.floor(Math.random()*keys.length)];
let theThing = exercise + " for ";
let quantity =  exercises[exercise][0]*(Math.ceil(Math.random()*3)+2);
let diff = quantity % 5;
quantity -= diff;
theThing = theThing + quantity + " " + exercises[exercise][1];

document.getElementById("app").innerHTML = theThing;