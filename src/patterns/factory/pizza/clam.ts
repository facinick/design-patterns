import Pizza from './pizza';

class ClamPizza extends Pizza {
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

export default ClamPizza;
