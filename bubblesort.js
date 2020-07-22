let comparisonCounter = 0;
let swapCounter = 0;

function bubbleSort(array){
//loop through the array, compare i & i+1
//if i > i+1 -- swap (array[i+1] save to a temp variable (not an array)
//array[i] = array[i+1]; array[i] = temp  (i was 0, i+1 was 1)
//then move on
//else if i < i +1 -- keep moving (continue)
//else if [1, 2, 8 , 8, 7]
//comparison counter & swap counter (need to remember these and where to increment)
  if (array.length <= 1) return array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      comparisonCounter++;
      // console.log(comparisonCounter);
    if (array[j] > array[j+1]) {
      let temp = array[j];
      swapCounter++;
      // console.log('swap', swapCounter)
      array[j] = array[j+1];
      // console.log('array[i]', array[i]);
      array[j+1] = temp;
    } else {
      continue;
    }
    // console.log(array)
    }
  }
  return array;
}


bubbleSort([8,6,5,7]);
// 
console.log(comparisonCounter);
console.log(swapCounter);
