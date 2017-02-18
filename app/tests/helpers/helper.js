import helper from '~/helpers/helper';

test('Should return empty object', () => {
  expect(helper([])).toEqual({});
});
