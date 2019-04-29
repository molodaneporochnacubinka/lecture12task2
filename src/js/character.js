export default class Character {
  constructor(name, type, defence, attack, damage) {
    this.name = name;
    this.type = type;
    this.defence = defence;
    this.attack = attack;
    this.damage = damage;
    this.level = 1;
    this.health = 100;
  }
}
