import day from ".";
import sampleinput from "./input/sample";
import sampleoutput from "./output/sample";

describe("solution", () => {
  it("sample input should match output", () => {
    expect(day(sampleinput).resultpart1).toEqual(sampleoutput);
  });
});
