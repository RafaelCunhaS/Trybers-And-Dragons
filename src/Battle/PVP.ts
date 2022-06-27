import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private fighter1: Fighter = new Character('Lutador 1'),
    private fighter2: Fighter = new Character('Lutador 2'),
  ) {
    super(fighter1);
  }

  fight(): number {
    while (this.fighter1.lifePoints > -1 && this.fighter2.lifePoints > -1) {
      this.fighter1.attack(this.fighter2);
      this.fighter2.attack(this.fighter1);
      this.fighter2.special(this.fighter1);
      this.fighter1.special(this.fighter2);
    }
    return this.fighter1.lifePoints === -1 ? -1 : 1;
  }
}
