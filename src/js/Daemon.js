import Mathdamage from './Mathdamage';

export default class Daemon extends Mathdamage {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.attack = 10;
    this.defence = 40;
  }
}
