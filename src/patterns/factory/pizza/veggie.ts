import Pizza from './pizza';

class VeggiePizza extends Pizza {
  prepare(): void {
    throw new Error('Method not implemented.');
  }
  cut(): void {
    throw new Error('Method not implemented.');
  }
  bake(): void {
    throw new Error('Method not implemented.');
  }
  box(): void {
    throw new Error('Method not implemented.');
  }
}

export default VeggiePizza;
