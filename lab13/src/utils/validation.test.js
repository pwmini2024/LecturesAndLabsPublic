import { isValidEmail } from "./validation";

describe("Email Validation Iterative Checks Unit Tests", () => {
  describe("Valid Emails", () => {
    const validEmails = [
      "test@example.com",
      "test.name@example.com",
      "test+label@example.com",
      "test@subdomain.example.com",
      "test@example-domain.com",
      "123@example.com",
      "test@example.co.uk",
    ];

    test.each(validEmails)(
      "should return true for valid email: %s",
      (email) => {
        expect(isValidEmail(email)).toBe(true);
      }
    );
  });

  describe.skip("[Exercise] Invalid Emails", () => {
    //TODO: Implement the tests for invalid emails
  });
});
