const Intern = require("../lib/Intern.js");

test("creates intern object", () => {
expect(Intern.name).toEqual(expect.any(String));
expect(Intern.id).toEqual(expect.any(Number));
expect(Intern.email).toEqual(expect.any(String));
expect(Intern.school).toEqual(expect.any(String));
});
