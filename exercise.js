const exercise = ["leg lifts", "jumping jacks", "pushups", "walking lunges", "squats", "crunches", "butterfly kicks","crocodile crawls","wall sits","toe touches","plank","wild card","mountain climbers","bicycle kicks","egg-beaters","reverse lunges","bear crawls","gorilla crawls","crab walk","knee switches","squat walking"];
const amount = ["one minute", "ninety seconds","fifteen reps","twenty reps","thirty reps","FIFTY REPS","until it BURNS (minimum twenty)"];

console.log(exercise[Math.floor(Math.random()*exercise.length)] + "for" + amount[Math.floor(Math.random()*amount.length)]);