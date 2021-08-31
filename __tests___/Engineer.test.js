const { exclude } = require("inquirer/lib/objects/separator");
const Engineer = require("../lib/Engineer.js");

test("creates engineer object", () => {
    const engineer = new Engineer("Shannon", "12", "test@test.com", "ShannonPosey");
    
expect(engineer.name).toBe("Shannon");
expect(engineer.id).toBe("12");
expect(engineer.email).toBe("test@test.com");
expect(engineer.github).toBe("ShannonPosey");

});

test("get github account from engineer", () => {
const engineer = new Engineer("Shannon", "12", "test@test.com", "ShannonPosey");

expect(engineer.getGithub()).toStrictEqual(expect.any(String));


});

test("get the role of from the engineer", () => {
    const engineer = new Engineer("Shannon", "12", "test@test.com", "ShannonPosey");
    
    expect(engineer.getRole()).toBe("Role: Engineer");
});