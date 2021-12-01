import day1 from "./day1";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

import exerciseinput from "./input/exercise";
import part1output from "./output/part1";
import part2output from "./output/part2";

describe("solution", () => {

  it("PART 1 - sample input should match output", () => {
    expect(day1(sampleinput).resultpart1).toEqual(sampleoutput);
  });

  it("PART 1 - exercise input should match output", () => {
    expect(day1(exerciseinput).resultpart1).toEqual(part1output);
  });

  it("PART 2 - exercise input should match output", () => {
    expect(day1(exerciseinput).resultpart2).toEqual(part2output);
  });
});
