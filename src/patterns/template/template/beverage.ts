abstract class Beverage {
  // This method is the template method, it should
  // not be changed/overridden by subclasses.

  // This method defined the steps to implement an algorithm.

  // Certain implementations of parts of the algorithm
  // may vary, those must be overridden (see brew)
  readonly prepareRecipe = () => {
    this.boilWater();
    this.brew();
    this.pourInCup();

    //
    if (this.hook1()) {
      this.addCondiments();
    }

    if (this.hook2()) {
      console.log(`this is a hook for logging this line`);
    }
  };

  // this part of the algorithm must be replicated across all the
  // base classes
  protected boilWater() {
    console.log(`boiling...`);
  }

  protected pourInCup() {
    console.log(`boiling...`);
  }

  // child subclasses must implement these parts of the algorithm
  protected abstract brew(): void;

  protected abstract addCondiments(): void;

  // hooks are ways to let child subclasses change the flow
  // of the template algorithm, provided by the superclass

  // a hook that is optional to be overridden by children
  // we provide a default value for it
  protected hook1(): boolean {
    return true;
  }

  // a hook that MUST be overridden by children
  protected abstract hook2(): boolean;
}

export default Beverage;
