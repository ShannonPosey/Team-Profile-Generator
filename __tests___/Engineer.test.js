const Engineer = require("../lib/Engineer.js");

test("creates engineer object", () => {
expect(Engineer.name).toEqual(expect.any(String));
expect(Engineer.id).toEqual(expect.any(Number));
expect(Engineer.email).toEqual(expect.any(String));
expect(Engineer.github).toEqual(expect.any(String));
});
