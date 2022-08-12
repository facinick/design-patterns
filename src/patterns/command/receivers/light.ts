interface Light {
  on(): void
  off(): void
}

class PhilipsLight implements Light {
  on(): void {
    console.log(`on`)
  }
  off(): void {
    console.log(`off`)
  }

}

class NormalLight implements Light {
  on(): void {
    console.log(`on`)
  }
  off(): void {
    console.log(`off`)
  }

}

export default Light
export {
  PhilipsLight,
  NormalLight,
}