export enum SIZE {
  tall = 'TALL',
  medium = 'MEDIUM',
  small = 'SMALL',
}

abstract class Beverage {
  description = 'unknown beverage';
  size = SIZE.medium;

  getDescription() {
    return this.description;
  }

  abstract calculateCost(): number;

  setSize(size: SIZE): Beverage {
    this.size = size;
    return this;
  }

  getSize() {
    return this.size;
  }
}

export default Beverage;
