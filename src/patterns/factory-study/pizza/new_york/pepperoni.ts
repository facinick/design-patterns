import Pizza from '../pizza';

class NewyorkPepperoniPizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'new york style pepperoni pizza';
    this.dough = 'thin crust';
    this.sauce = 'pepper sauce';
    this.toppings = [
      'grated ragino cheese',
      'pepperoni slices',
      'blue cheese',
      'red sauce',
      'magic mushrooms',
    ];
  }
  cut(): void {
    console.log(`cutting into equal triangles`);
  }
  bake(): void {
    console.log(`baking at 360 degrees`);
  }
  box(): void {
    console.log(`boxing this ny pepperoni maaf`);
  }
}

export default NewyorkPepperoniPizza;
