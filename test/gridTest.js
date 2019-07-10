describe('generateCoords', function() {
  it('should add class to element', function() {
    let element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

});