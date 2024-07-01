export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('Sqft must be a number');
    this._sqft = sqft;
    // call the 'evacuationWarningMessage' method
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // Abstract classes are designed to serve as a blueprint for other classes.
  // They are designed to serve as a blueprint for other classes, providing a common interface
  // or set of methods that subclasses must implement.Abstract methods may contain abstract methods
  // which sre declared but not defined in the abstract class.Subclasses are required to provide
  // concrete
  // implementations for these abstract methods

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
