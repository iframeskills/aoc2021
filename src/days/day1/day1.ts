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

export const hasIncreasedCount = (numbers:number[]) =>{
  const hasIncreasedResult: boolean[] = [];
  numbers.forEach((number, index) =>{
    const result = hasIncreased(number, numbers[index+1]);
    hasIncreasedResult.push(result);
  });
  const amountOfTrues:number = countTrues(hasIncreasedResult);
  return amountOfTrues;
}

export const hasIncreasedCountSteps = (numbers:number[]) =>{
  const hasIncreasedResult: boolean[] = [];
  numbers.forEach((number, index) =>{
    if(index!== 0 && index < numbers.length - 2){
      const currentSum:number = numbers[index] + numbers[index+1] + numbers[index+2];
      const previousSum:number = numbers[index-1] + numbers[index] + numbers[index+1];
      // compare 
      const result = currentSum > previousSum;

      hasIncreasedResult.push(result);
    }
  });

  const amountOfTrues:number = countTrues(hasIncreasedResult);
  return amountOfTrues;
}

export default (input: string): SolutionResult => {
  const numbers: number[] = input.split("\n").map((item) => +item);

  const resultpart1 = hasIncreasedCount(numbers);
  const resultpart2 = hasIncreasedCountSteps(numbers);

  return { resultpart1, resultpart2 };
};
