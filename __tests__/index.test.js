describe('suite 1', () => {

  describe('suite 1.1', () => {
    test('does a thing we expect', () => {
      let a = 'jkf';
      expect(a).toEqual('jkf');
    });
  });

  describe('suite 1.2', () => {
    test('Does that other thing we expect', () => {
      expect(0).toEqual(1);
    });
  });
});
