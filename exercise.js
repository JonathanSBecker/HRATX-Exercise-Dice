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
  "squat walking": [8, "reps"]
}

const keys = Object.keys(exercises);
const exercise = keys[Math.floor(Math.random()*keys.length)];
console.log(exercise, "for", exercises[exercise][0]*(Math.ceil(Math.random()*3)+2), exercises[exercise][1]);