import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
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
      this._fighter.attack(this._monsters[0]);
      this.checkEnemiesHealth();
      this._monsters.forEach((enemy) => enemy.attack(this._fighter));
      this._fighter.special(this._monsters[0]);
      this.checkEnemiesHealth();
    }
    return super.fight();
  }

  checkEnemiesHealth() {
    if (this._monsters[0].lifePoints === -1 
      && this._monsters.length !== 1) this._monsters.shift();
  }
}