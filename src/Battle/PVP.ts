import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _fighter1: Fighter = new Character('Lutador 1'),
    private _fighter2: Fighter = new Character('Lutador 2'),
  ) {
    super(_fighter1);
  }

  fight(): number {
    while (this._fighter1.lifePoints > -1 && this._fighter2.lifePoints > -1) {
      this._fighter1.attack(this._fighter2);
      this._fighter2.attack(this._fighter1);
      this._fighter2.special(this._fighter1);
      this._fighter1.special(this._fighter2);
    }
    return super.fight();
  }
}
