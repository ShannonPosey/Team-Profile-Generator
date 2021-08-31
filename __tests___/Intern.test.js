const Intern = require("../lib/Intern.js");

test("creates intern object", () => {
const intern = new Intern("Shannon", "2", "test@test.com", "University of Florida");
    
expect(intern.name).toBe("Shannon");
expect(intern.id).toBe("2");
expect(intern.email).toBe("test@test.com");
expect(intern.school).toBe("University of Florida");
});

test("get school from intern", () => {
    const intern = new Intern("Shannon", "2", "test@test.com", "University of Florida");

    expect(intern.getSchool()).toStrictEqual(expect.any(String));
});

test("get role from the intern", () => {
    const intern = new Intern("Shannon", "2", "test@test.com", "University of Florida");
    
    expect(intern.getRole()).toBe("Role: Intern");
});