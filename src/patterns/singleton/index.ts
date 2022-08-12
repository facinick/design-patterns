import Singleton from "./singleton"

function run() {
  const oneOfAKind: Singleton = Singleton.getInstance()
  oneOfAKind.display()
}

run()