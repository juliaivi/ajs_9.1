export default class Mathdamage {
  constructor(name, type, distance) {
    this.name = name;
    this.type = type;
    this.stoned = false;
    this.distance = distance;
  }

  // дурман
  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let currentAttack = ((100 - (this.distance - 1) * 10) / 100) * this._attack;

    if (this.stoned === true) {
      currentAttack -= Math.log2(this.distance) * 5;
      return Math.floor(currentAttack);
    }

    return currentAttack;
  }
}
