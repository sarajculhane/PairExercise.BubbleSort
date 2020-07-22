describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual( [] );
    });

    it('handles an array with one element', function(){
        expect(bubbleSort([1])).toEqual( [1] );
      });

    it('takes an array and gives back array sorted smallest to largest', function(){
        expect(bubbleSort([3,5,6,2,4])).toBe([2,3,4, 5, 6]);
    });

    it('length of array after sort is same as before sort', function(){
        expect([3,5,6,2,4].length).toEqual(bubbleSort([3,5,6,2,4]).length);
    })
    

    it('mutates orignal array', function(){
        expect([3,5,6,2,4]).toNotEqual(bubbleSort([3,5,6,2,4]));
    });

    it ('expect comparison counter to increment with each call', function(){
        const array = [8, 7, 6, 5, 4, 3, 2, 1]
        const comparisonCounter = 0
        bubbleSort(array);
        expect(counter).toEqual(8)
    })
    it ('expect swap counter to increment when a value is swapped', function(){
        const array = [6, 8, 5, 7]
        const swapCounter = 0
        bubbleSort(array);
        expect(swapCounter).toEqual(3)
    })

  });

// describe('Bubble Sort', function(){
//     it('handles an empty array', function(){
//       expect( bubbleSort([]) ).toEqual( [] );
//     });
//   });