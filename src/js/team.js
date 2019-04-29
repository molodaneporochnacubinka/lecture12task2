export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addALL(...characters) {
    characters.forEach((character) => {
      this.characters.add(character);
    });
  }

  toArray() {
    return [...this.characters];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.size - 1;
    const array = this.toArray();
    array.sort((a, b) => {
      const aForce = a.defence + a.health;
      const bForce = b.defence + b.health;
      const aAttack = a.attack + a.damage;
      const bAttack = b.attack + b.damage;
      if (aForce > bForce) {
        return 1;
      }
      if (aForce < bForce) {
        return -1;
      }
      if (aAttack > bAttack) {
        return -1;
      }
      if (aAttack < bAttack) {
        return 1;
      }
      return 0;
    });
    return {
      next() {
        if (current <= last) {
          current += 1;
          return {
            done: false,
            value: array[current - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
