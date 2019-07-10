const assert = chai.assert;

describe(`generateCoordsArray`, function() {
  it(`returns ['00','01','10','11'] if passed 2`, function() {
    const maxValue = 2;
    const expected = ['00','01','10','11'];
    assert.deepEqual(generateCoordsArray(maxValue),expected);
  });
});