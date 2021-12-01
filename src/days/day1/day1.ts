interface SolutionResult {
  resultpart1: unknown;
  resultpart2: unknown;
}

export const hasIncreased = (previousNumber: number, nextNumber:number|undefined): boolean => {
  if(!nextNumber) return false;
  return previousNumber < nextNumber
};

export const countTrues = (arrOfBooleans:boolean[])=>{
  let amount = 0;
  arrOfBooleans.forEach((element:boolean)=>{
    if(element === true){ amount += 1; }
  });
  return amount;
}


export default (input: string): SolutionResult => {
  const numbers: number[] = input.split("\n").map((item) => +item);

  const hasIncreasedResult: boolean[] = [];
  numbers.forEach((number, index) =>{
    const result = hasIncreased(number, numbers[index+1]);
    hasIncreasedResult.push(result);
  });
  const amountOfTrues:number = countTrues(hasIncreasedResult);

  const resultpart1 = amountOfTrues;

  let resultpart2;

  return { resultpart1, resultpart2 };
};
