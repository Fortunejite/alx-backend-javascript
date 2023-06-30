const _copySymbol = Symbol('copy');

export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    } else if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    } else if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [_copySymbol]() {
    // Implementation of the copy method
    const brand = this._brand; // Copy the array
    const motor = this._motor
    const color = this._color
    return new MyClass(brand, motor, color);
  }

  cloneCar() {
    return this[_copySymbol]();
  }
}
