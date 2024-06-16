// todo: de refacut aici

// import express from "express";
// import { jest } from "@jest/globals";
// import request from "supertest";
// import productsRouter from "../routes/api/products.js";
// import validateAuth from "../config/config-passport";

// const app = express();
// app.use(express.json());
// app.use("/api/products", validateAuth, productsRouter);

// jest.mock("../config/config-passport.js");

// const validateAuthMock = jest.fn((validateAuth) => next());

// describe("Products routes", () => {
//   test("responds to: listProducts ", async () => {
//     const result = await request(app).get("/api/products/", validateAuthMock);

//     console.log(result);

//     expect(result.statusCode).toBe(200);
//   });
// });
