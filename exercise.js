const exercise = ["leg lifts", "jumping jacks", "pushups", "walking lunges", "squats", "crunches", "butterfly kicks","gator walk","wall sits","toe touches","plank","wild card","mountain climbers"];
const amount = ["one minute", "ninety seconds","fifteen reps","twenty reps","thirty reps","FIFTY REPS","until it BURNS"];

console.log(exercise[Math.floor(Math.random()*exercise.length)] + "for" + amount[Math.floor(Math.random()*amount.length)]);