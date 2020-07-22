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

  });

// describe('Bubble Sort', function(){
//     it('handles an empty array', function(){
//       expect( bubbleSort([]) ).toEqual( [] );
//     });
//   });