import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");

it("should execute the writeFile method", () => {
  const testData = "Test";
  const fileName = "test.txt";

  writeData(testData, fileName);

  // return expect(writeData(testData, fileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});
