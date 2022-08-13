interface Duck {
  quack(): void
}

class MallardDuck implements Duck {
  quack(): void {
    console.log(`quack quack`)
  }
}

export default Duck
export {
  MallardDuck
}