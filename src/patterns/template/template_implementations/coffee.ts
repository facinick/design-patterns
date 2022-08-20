import Beverage from '../template/beverage';

class Coffee extends Beverage {
  brew(): void {
    console.log(`coffee brewing...`);
  }
  addCondiments(): void {
    console.log(`adding sugar and stuff`);
  }
  hook2(): boolean {
    return false;
  }
}

export default Coffee;
