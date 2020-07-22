function split(wholeArray) {
    const midpoint = Math.floor((wholeArray.length)/2)
    const firstHalf = wholeArray.slice(0, midpoint)
    const secondHalf = wholeArray.slice(midpoint)
    return [firstHalf, secondHalf];    
  }

  