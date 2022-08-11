import Pizza from '../pizza';

class NewyorkClamPizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'new york style clam pizza';
    this.dough = 'thin crust';
    this.sauce = 'marinara sauce';
    this.toppings = ['grated ragino cheese', 'dried clams'];
  }
  cut(): void {
    console.log(`cutting into equal triangles`);
  }
  bake(): void {
    console.log(`baking at 350 degrees`);
  }
  box(): void {
    console.log(`boxing this ny clam maaf`);
  }
}

export default NewyorkClamPizza;
