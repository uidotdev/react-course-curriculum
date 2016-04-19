import { expect } from 'chai';

describe('test environment', () => {
  let a = false;

  beforeEach(() => {
    a = true;
  });

  it('should work', () => {
    expect(a).to.equal(true);
  })
});
