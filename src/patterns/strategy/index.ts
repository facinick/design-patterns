import FlyRocketPowered from './behaviours/fly/fly_rocket_powered';
import Duck from './objects/duck/duck';
import MallardDuck from './objects/duck/mallard_duck';
import RubberDuck from './objects/duck/rubber_duck';

function run() {
  // program to interface / supertype
  const timothy: Duck = new MallardDuck();
  timothy.display();
  timothy.makeSound();

  const bishop: Duck = new RubberDuck();
  bishop.display();
  bishop.makeSound();
  bishop.fly();
  // dynamically assign behaviours
  bishop.setFlyBehaviour(new FlyRocketPowered());
  bishop.fly();
}

export default run;
