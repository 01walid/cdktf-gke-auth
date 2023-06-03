import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest"; // Load types for expect matchers

import { GKETestingStack } from "./stack";

describe("Snapshot testing", () => {
  let stack: GKETestingStack;
  let synthedOutputJSON: string;

  beforeAll(() => {
    const app = Testing.app();
    stack = new GKETestingStack(app, "testing-stack");
    synthedOutputJSON = Testing.synth(stack);
  });

  it("synths successfully", () => {
    expect(synthedOutputJSON).toMatchSnapshot();
  });
});
