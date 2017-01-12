describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array that is not empty', function(){
    expect( bubbleSort([5, 3, 9, 4]) ).toEqual( [3, 4, 5, 9] );
  });

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('counts the number of swaps', function () {
    bubbleSort([4,6,2,7,8,3]);
    expect(swap.calls.count()).toEqual(1);
  });
});

