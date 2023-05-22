import Mathdamage from './Mathdamage';

export default class Magician extends Mathdamage {
  constructor(name, distance) {
    super(name, 'Magician', distance);
    this.attack = 10;
    this.defence = 40;
  }
}
