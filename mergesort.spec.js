describe('Merge sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array of 1', function(){
    expect( mergeSort([5]) ).toEqual( [5] );
  });

  it('handles an array of more than 1', function(){
    expect( mergeSort([2, 5, 7, 1, 0, 3]) ).toEqual( [0, 1, 2, 3, 5, 7] );
  });
});

describe('Split Array function', function() {
  it('is able to split an array with even number of elements into two halves', function() {
    expect( split([2, 5, 7, 1, 0, 3]) ).toEqual( [[2, 5, 7], [1, 0, 3]] );
  });
});

describe('Split Array function', function() {
  it('is able to split an array with odd number of elements into two halves', function() {
    expect( split([2, 5, 7, 1, 0, 3, 9]) ).toEqual( [[2, 5, 7, 1], [0, 3, 9]] );
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
   	expect( merge([0, 1, 2], [3, 5, 7]) ).toEqual( [0, 1, 2, 3, 5, 7] );
  });
});