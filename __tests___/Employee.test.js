const Employee = require("../lib/Employee");

test("creates employee object", () => {
const employee = new Employee("Shannon", "2", "test@test.com");
    
expect(employee.name).toBe("Shannon");
expect(employee.id).toBe("2");
expect(employee.email).toBe("test@test.com");
});

test("get employee's name", () =>{
    const employee = new Employee("Shannon", "2", "test@test.com");

   expect(employee.getName()).toStrictEqual(expect.any(String));
});

test("get employee's id", () =>{
    const employee = new Employee("Shannon", "2", "test@test.com");

   expect(employee.getId()).toStrictEqual(expect.any(String));
});

test("get employee's email", () =>{
    const employee = new Employee("Shannon", "2", "test@test.com");

    expect(employee.getEmail()).toStrictEqual(expect.any(String));
});    

test("get employee's name", () =>{
    const employee = new Employee("Shannon", "2", "test@test.com");

expect(employee.getRole()).toStrictEqual(expect.any(String));
});