const request = require('supertest');
import Arithematic from '../src/index';
import RestApi from '../src/rest.api';

let ops = new Arithematic();
let api = new RestApi();

describe("Arithematic operations", () => {
    test("Add 2 + numbers", () => {
        expect(ops.add(3, 4)).toBe(7);
    });
    test("Add 2 - numbers", () => {
        expect(ops.add(-3, -4)).toBe(-7);
    });
    test("Add 1+ and 1- numbers", () => {
        expect(ops.add(3, -4)).toBe(-1);
    });
    test("Add 1- and 1+ numbers", () => {
        expect(ops.add(-3, 4)).toBe(1);
    });
});

describe("Multiplication operations", () => {
    test("Mul 2+ numbers", () => {
        expect(ops.mul(3, 4)).toBe(12);
    });
    test("Mul 2- numbers", () => {
        expect(ops.mul(-3, -4)).toBe(12);
    });
    test("Mul 1+ and 0 numbers", () => {
        expect(ops.mul(3, 0)).toBe(0);
    });
    test("Mul 1- and 0 numbers", () => {
        expect(ops.mul(-3, 0)).toBe(-0);
    });
});

describe("Restapi operations", () => {
    test("test restapi component", () => {
        api.startServer();
        api.sayHello();
        return request(api.getApp()).get("/").expect(200);
        });
});