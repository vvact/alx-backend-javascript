import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call the constructor of the parent class (Building) and pass 'sqft'
    super(sqft);
    if (typeof floors !== 'number') {
      throw new Error('Foors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
