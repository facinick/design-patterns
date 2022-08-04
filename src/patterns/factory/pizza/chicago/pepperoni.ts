import Pizza from '../pizza';

class ChicagoPepperoniPizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'chicago style pepperoni pizza';
    this.dough = 'thic crust';
    this.sauce = 'salted pepper sauce';
    this.toppings = [
      'grated ragino cheese',
      'pepperoni sliced',
      'blue cheese',
      'milk',
    ];
  }
  cut(): void {
    console.log(`cutting into squares`);
  }
  bake(): void {
    console.log(`baking at 360 degrees`);
  }
  box(): void {
    console.log(`boxing this ny pepperoni maaf in square boxes`);
  }
}

export default ChicagoPepperoniPizza;
