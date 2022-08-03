import Beverage, { SIZE } from './beverage';
import Decaf from './beverages/decaf';
import Mocha from './condiments/mocha';
import Whip from './condiments/whip';

function run() {
  const largeDrink: Beverage = new Whip(new Mocha(new Mocha(new Decaf())));

  const smallDrink = new Whip(new Mocha(new Mocha(new Decaf()))).setSize(
    SIZE.small
  );

  console.log(
    `total for ${largeDrink.getSize()} ${largeDrink.getDescription()} is: ${largeDrink.calculateCost()}`
  );

  console.log(
    `total for ${smallDrink.getSize()} ${smallDrink.getDescription()} is: ${smallDrink.calculateCost()}`
  );
}

export default run;
