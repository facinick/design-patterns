class Singleton {
  private static uniqueInstance: Singleton | undefined

  private constructor() { }

  static getInstance(): Singleton {

    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton()
    }

    return this.uniqueInstance
  }

  // other methods 

  display() {
    console.log(`hello singleton`)
  }
}

export default Singleton