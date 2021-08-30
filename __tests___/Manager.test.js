const Manager = require("../lib/Manager.js");

test("create manager object", () => {
expect(Manager.name).toEqual(expect.any(String));
expect(Manager.id).toEqual(expect.any(Number));
expect(Manager.email).toEqual(expect.any(String));
expect(Manager.officeNumber).toEqual(expect.any(Number));
});
