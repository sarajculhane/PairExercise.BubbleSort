function split(wholeArray) {
    const midpoint = Math.floor((wholeArray.length)/2)
    const firstHalf = wholeArray.slice(0, midpoint)
    const secondHalf = wholeArray.slice(midpoint)
    return [firstHalf, secondHalf];    
  }

// [1, 3, 2, 6] => ... [1], [3], [2], [6]
// merge(1, 3) ==> [1,3] merge(2, 6) => [2,6] merge([1,3], [2,6]) => [1,2,3,6]
// 
  function merge(arrOne, arrTwo) {
    const fullArr = []
    let pointerOne = 0
    let pointerTwo = 0
    for (let i = 0 ; i < arrTwo.length + arrOne.length; i++) {

      if(arrOne[pointerOne] < arrTwo[pointerTwo]) {
        fullArr.push(arrOne[pointerOne])
        pointerOne++
      } else {
        fullArr.push(arrTwo[pointerTwo])
        pointerTwo++
      }

    }
    return fullArr
  }

  function mergeSort(array) { // [1,5, 3, 5, 7, 4, 10]
    if (array.length === 1) return array
    else {
      while(array.length) {
        split(array) // [1,5,3] [5,7, 4, 10] => [1,5] [3] [5,7] [4,10]
        // [1] [5][3][5][7][4][10] (split is done) (now we can merge)
      }
    }
    
    


  }

  const splitOne = split([1,3,4,6])
  console.log( split(splitOne[0]), 'once')

  // console.log(split(splitOne), 'twice')

  // console.log(split(split(split([1,3,4,6]))), 'thrice')