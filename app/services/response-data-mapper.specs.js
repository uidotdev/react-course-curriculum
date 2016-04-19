import expect from 'expect.js';

describe('test environment', () => {
  let a = false;

  beforeEach(() => {
    a = true;
  });

  it('should work', () => {
    expect(a).to.be(true);
  })
});
