import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number) {
    this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter) { enemy.receiveDamage(this.strength); }
}