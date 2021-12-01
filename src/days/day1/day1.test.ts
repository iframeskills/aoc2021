import day1, {hasIncreased, countTrues} from "./day1";
import sampleinput from "./input/sample";

describe("solution", () => {

  it("returns false for no previous measurement", () => {
    const result = hasIncreased(199, undefined)
    expect(result).toEqual(false);
  });

  it("returns true for increase", () => {
    const result = hasIncreased(199, 200)
    expect(result).toEqual(true);
  });

  it("returns false for decrease", () => {
    const result = hasIncreased(210, 200)
    expect(result).toEqual(false);
  });

  it("counts numbers of true", () => {
    const result = countTrues([false, true, true, true, false, true, true, true, false, true]);
    expect(result).toEqual(7); 
  });

  it("PART 1 - sample input should match output", () => {
    expect(day1(sampleinput).resultpart1).toEqual(7);
    expect(day1(sampleinput).resultpart2).toEqual(5);
  });
});
