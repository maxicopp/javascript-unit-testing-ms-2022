import { expect, it } from "vitest";

import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    done();
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  });
});
