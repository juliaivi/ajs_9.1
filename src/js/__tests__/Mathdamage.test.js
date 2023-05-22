import Daemon from '../Daemon';
import Magician from '../Magician';

test('damage power without dope', () => {
  const daemon = new Daemon('Loo', 1);
  daemon.attack = 100;
  daemon.stoned = false;
  expect(daemon.attack).toBe(100);
});

test('damage power without dope and 3 cells further', () => {
  const magic = new Magician('Loo', 3);
  magic.attack = 100;
  magic.stoned = false;
  expect(magic.attack).toBe(80);
});

test('dope damage power and 3 cells further', () => {
  const magic = new Magician('Loo', 3);
  magic.attack = 100;
  magic.stoned = true;
  expect(magic.attack).toBe(72);
});

test('damage power without dope and 11 cells further', () => {
  const magic = new Magician('Loo', 11);
  magic.attack = 100;
  magic.stoned = false;
  expect(magic.attack).toBe(0);
});
