interface Turkey {
  gobble(): void;
}

class MallardTurkey implements Turkey {
  gobble(): void {
    console.log(`gobble gobble`);
  }
}

export default Turkey;
export { MallardTurkey };
