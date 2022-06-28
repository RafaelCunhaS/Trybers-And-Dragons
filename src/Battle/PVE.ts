import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Fighter = new Character('Player'), 
    private _monsters: Array<Fighter | SimpleFighter> = [new Monster()],
  ) {
    super(_fighter);
  }

  fight(): number {
    while (this._fighter.lifePoints > -1 
      && this._monsters[0].lifePoints > -1) {
      const random = getRandomInt(1, 2);
      if (random === 1) this._fighter.attack(this._monsters[0]);
      else this._fighter.special(this._monsters[0]);
      this.checkEnemiesHealth();
      this._monsters.forEach((enemy) => enemy.attack(this._fighter));
    }
    return super.fight();
  }

  checkEnemiesHealth() {
    if (this._monsters[0].lifePoints === -1 
      && this._monsters.length !== 1) this._monsters.shift();
  }
}