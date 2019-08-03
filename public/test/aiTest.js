const assert = chai.assert;

describe(`#generateMatrix`, function() {
  it(`returns [] if passed nothing`, function() {
    const output = [];
    assert.deepEqual(generateMatrix(),output);
  });
  it(`returns [[,],[,]] if passed 2`, function() {
    const output = [[,],[,]];
    assert.deepEqual(generateMatrix(2),output);
  });
  it(`returns [[,,],[,,],[,,]] if passed 3`, function() {
    const output = [[,,],[,,],[,,]];
    assert.deepEqual(generateMatrix(3),output);
  });
});