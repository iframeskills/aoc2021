interface SolutionResult {
  resultpart1: unknown;
  resultpart2: unknown;
}

export default (input: string): SolutionResult => {
  // const numbers: number[] = input.split("\n").map((item) => +item);

  const resultpart1 = input;

  let resultpart2;

  return { resultpart1, resultpart2 };
};
