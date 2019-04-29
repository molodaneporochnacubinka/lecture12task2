import Character from '../src/js/character';
import Team from '../src/js/team';

test('test team iterable by weak and attack order 1', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 8, 8);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 5, 5);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(bowerman, swordsman, magician);

  const iterator = team[Symbol.iterator]();
  expect(iterator.next().value).toEqual(bowerman);
  expect(iterator.next().value).toEqual(swordsman);
  expect(iterator.next().value).toEqual(magician);
  expect(iterator.next().done).toBeTruthy();
});

test('test team iterable by weak and attack order 2', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 8, 8);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 5, 5);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(magician, bowerman, swordsman);

  const iterator = team[Symbol.iterator]();
  expect(iterator.next().value).toEqual(bowerman);
});

test('test team iterable by weak and attack order 3', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 8, 8);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 5, 5);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(swordsman, bowerman, magician);

  const iterator = team[Symbol.iterator]();
  expect(iterator.next().value).toEqual(bowerman);
});

test('test team iterable by weak and attack initial order', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 8, 8);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 8, 8);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(bowerman, swordsman, magician);

  const iterator = team[Symbol.iterator]();
  expect(iterator.next().value).toEqual(bowerman);
});
