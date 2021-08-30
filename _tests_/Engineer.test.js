const { test, expect } = require("@jest/globals");
// const Engineer = require("../lib/Engineer.js");

const checkIfEqual = require("../lib/Engineer");

// test("creates engineer object", () => {
//     expect(Engineer.name).toEqual(expect.any(String));
//     expect(Engineer.id).toEqual(expect.any(Number));
//     expect(Engineer.email).toEqual(expect.any(String));
//     expect(Engineer.github).toEqual(expect.any(String));
// });

test("checks if 10 is equal to 10", () => {
    expect(checkIfEqual(10,10)).toBe(true);
});