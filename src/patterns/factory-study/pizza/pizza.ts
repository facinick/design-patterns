abstract class Pizza {
  abstract name: string;
  abstract dough: string;
  abstract sauce: string;
  abstract toppings: Array<string>;

  // implement here ONLY if all subclasses
  // are going to use this AS is
  // otherwise what's the point
  prepare() {
    console.log(`preparing...`);
    console.log(`total ${this.toppings.length} ingredients`);
  }

  abstract cut(): void;
  abstract bake(): void;
  abstract box(): void;

  getName() {
    return this.name;
  }
}

export default Pizza;
