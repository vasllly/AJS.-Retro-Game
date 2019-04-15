import Character from '../src/js/Character';
import Bowman from '../src/js/characters/Bowman';

test('new Character throw Error', () => {
  function newCharacter() {
    // eslint-disable-next-line no-new
    new Character(1);
  }
  expect(newCharacter).toThrowError(new TypeError('Нельзя создать объект класса Character!'));
});

test('new Bowman don\'t throw Error', () => {
  const received = new Bowman(1);
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    type: 'bowman',
  };
  expect(received).toEqual(expected);
});
