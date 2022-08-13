import Turkey from "../new_vendor/turkey"
import Duck from "../old_vendor/duck"

class DuckTurkeyAdapter implements Duck {

  turkey: Turkey

  constructor(turkey: Turkey) {
    this.turkey = turkey
  }

  quack(): void {
    this.turkey.gobble()
  }
}

export default DuckTurkeyAdapter