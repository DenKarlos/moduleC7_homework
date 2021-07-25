import { mult } from "../index.js";

describe("test multiply", () => {
    it("multiply 1 * 0 to equal 1", () => {
        expect(mult(1, 0)).toBe(0);
    }),
        it("multiply 1 * 1 to equal 1", () => {
            expect(mult(1, 1)).toBe(1);
        });
});
