const Manager = require("../lib/Manager.js");

test("create manager object", () => {
    const manager = new Manager("Shannon", "2", "test@test.com", "103");

expect(manager.name).toEqual("Shannon");
expect(manager.id).toEqual("2");
expect(manager.email).toEqual("test@test.com");
expect(manager.officeNumber).toEqual("103");
});

test("get the office number of the manager", () => {
    const manager = new Manager("Shannon", "2", "test@test.com", "103");

    expect(manager.getOfficeNumber()).toBe("Office Number: 103");
});

test("get the role of the manager", () => {
    const manager = new Manager("Shannon", "2", "test@test.com", "103");

    expect(manager.getRole()).toBe("Role: Manager");
});
//getRole
//officeNumber