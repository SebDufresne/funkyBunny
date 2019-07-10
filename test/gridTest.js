describe(`generateCoordsArray`, function() {
  it(`returns ['00','01','10','11'] if passed 2`, function() {
    const seed = 2;
    const expect = ['00','01','10','11'];
    assert.deepEqual(generateCoordsArray(2),['00','01','10','11']);
  });
});