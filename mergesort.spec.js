describe('Split Array function', function() {

    it('is able to an array into two halves', function() {
      let array1= [1,3,5,7,9,11]
      let array2= [1,3,5,7,9]
      if (array1.length % 2 === 0){
      expect(split(array1).length).toEqual(2)
      expect(split(array1)[0].length).toEqual(split(array1)[1].length)
      } else if (array2.length % 2 ===1){
          expect(split(array2)[0].length + 1).toEqual(split(array2)[1].length)
      }
      });
 
  });


describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
    });
  });