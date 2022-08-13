import { MallardTurkey } from "./new_vendor/turkey"
import DuckTurkeyAdapter from "./old_to_new_adapter/duck_turkey_adapter"
import Duck, { MallardDuck } from "./old_vendor/duck"

function run() {

  const donald: Duck = new MallardDuck()
  const reginald: Duck = new DuckTurkeyAdapter(new MallardTurkey())

  donald.quack()
  reginald.quack()


  // All the existing code that works with 'duck' interface, will not also work with 'turkey' interface with the help of the adapter.

}

run()