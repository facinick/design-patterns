import Beverage from '../template/beverage';

class Tea extends Beverage {
  brew(): void {
    console.log(`tra brewing...`);
  }
  addCondiments(): void {
    console.log(`adding sugar and stuff`);
  }
  hook2(): boolean {
    return true;
  }
}

export default Tea;
