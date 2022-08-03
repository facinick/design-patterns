export function getRandomIntegerBetween(
  minIncludedNumber: number,
  maxIncludedNumber: number
) {
  // min and max included
  return Math.floor(
    Math.random() * (maxIncludedNumber - minIncludedNumber + 1) +
      minIncludedNumber
  );
}

export function getRandomPositiveIntegerLessThanEqualTo10() {
  return getRandomIntegerBetween(0, 10);
}
