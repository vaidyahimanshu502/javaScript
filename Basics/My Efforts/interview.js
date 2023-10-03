// /**how many elevators are need to lift the weight the max capacity of an elevater is 150kg and there
//  *  are two types of weights 50kg AND 100KG and if max capacity of an elevator is lift two weights at
//  *  a time program in javascript */

function elevaterRequired(weights) {
  let elevaterCapacity = 150;
  let elevaterNeeded = 0;
  let currentWeight = 0;
  //   let maxNumberCanLift = 1;

  for (let weight of weights) {
    if (currentWeight + weight <= elevaterCapacity) {
       currentWeight += weight;
      //   maxNumberCanLift++;
      if (currentWeight === elevaterCapacity) {
        elevaterNeeded++;
        currentWeight = 0;
        // maxNumberCanLift = 1;
      }
    } else {
      elevaterNeeded++;
      currentWeight = weight;
      //   maxNumberCanLift = 1;
    }
  }
  if (currentWeight > 0) {
    elevaterNeeded++;
  }

  return elevaterNeeded;
}

const weights = [50, 100, 50, 50, 50, 100, 50, 100, 100];
const numberOfElevater = elevaterRequired(weights);
console.log(numberOfElevater);
