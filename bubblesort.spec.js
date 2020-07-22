describe('Bubble Sort', function(){
  beforeEach = () => {
    let comparisonCounter = 0;
    let swapCounter = 0;
  };
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual( [] );
    });

    it('handles an array with one element', function(){
        expect(bubbleSort([1])).toEqual( [1] );
      });

    it('takes an array and gives back array sorted smallest to largest', function(){
        expect(bubbleSort([3,5,6,2,4])).toEqual([2,3,4,5,6]);
    });

    it('length of array after sort is same as before sort', function(){
        expect([3,5,6,2,4].length).toEqual(bubbleSort([3,5,6,2,4]).length);
    });

    it('mutates orignal array', function(){
        expect(bubbleSort([3,5,6,2,4])).toNotEqual(bubbleSort([3,5,6,2,4]));
    });

    it ('expect comparison counter to increment with each call', function(){
        const array = [8,7,6,5,4,3,2,1];
        bubbleSort(array);
        expect(comparisonCounter).toEqual(64);
    });
    
    it ('expect swap counter to increment when a value is swapped', function(){
        const array = [6,8,5,7];
        bubbleSort(array);
        expect(swapCounter).toEqual(3);
    });
  });
