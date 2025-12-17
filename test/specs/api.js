const { expect } = require("@wdio/globals");
const apiClient = require("../pageobjects/api.class");

describe("API Tests", () => {
  
  it("should GET a resource successfully", async () => {
    const response = await apiClient.get("/productsList");

    expect(response.status).toBe(200); // status code assertion
    expect(response.data.products[0]).toHaveProperty("id", 1); // body assertion
  });



});

const qs = require("qs");


describe("POST API Tests", () => {
  it("[LOGIN]should verify login via POST", async () => {
    const payload = qs.stringify({
      email: "test@automationexercise.com",
      password: "123456",
    });

    const response = await apiClient.post(
  "/verifyLogin",
  payload,
  { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
);


    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Email already exists!");
  });
});




describe("[SIGNUP]Signup API Test", () => {
  it("should create a new user successfully", async () => {
    const payload = qs.stringify({
      name: "John Doe",
      email: `test1@automationexercise.com`, // unique email
      password: "123456",
      title: "Mr",
      birth_date: "15",
      birth_month: "6",
      birth_year: "1990",
      firstname: "John",
      lastname: "Doe",
      company: "Example Corp",
      address1: "123 Main St",
      address2: "Apt 4",
      country: "United States",
      zipcode: "12345",
      state: "California",
      city: "Los Angeles",
      mobile_number: "1234567890"
    });

    const response = await apiClient.post(
      "/createAccount",
      payload,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    expect(response.status).toBe(200); // success status code
    expect(response.data.message).toBe("User created!"); // success message
  });
});


describe("DELETE API Tests", () => {
  it("[DELETE] should delete an existing user account", async () => {
   const payload = qs.stringify({
  email: "test1@automationexercise.com",
  password: "123456",
});

const response = await apiClient.delete(
  "/deleteAccount",
  payload,
  { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
);

expect(response.status).toBe(200);
expect(response.data.message).toBe("Account deleted!");


    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Account deleted!");
  });
});