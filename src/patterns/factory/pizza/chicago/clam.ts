import Pizza from '../pizza';

class ChicagoClamPizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'chicago style clam pizza';
    this.dough = 'thic crust';
    this.sauce = 'salted pepper sauce';
    this.toppings = ['grated ragino cheese', 'dried clams', 'white cheese'];
  }
  cut(): void {
    console.log(`cutting into squares`);
  }
  bake(): void {
    console.log(`baking at 420 degrees`);
  }
  box(): void {
    console.log(`boxing this ny pepperoni maaf in square boxes`);
  }
}

export default ChicagoClamPizza;
