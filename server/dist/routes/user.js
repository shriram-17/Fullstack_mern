"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
exports.UserRoute = (0, express_1.default)();
let prisma = new client_1.PrismaClient();
exports.UserRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
exports.UserRoute.get('/', (req, res) => {
    return res.send("Your in User Page");
});
exports.UserRoute.post('/', (req, res) => {
    console.log(req.body);
    return res.send('Form submitted successfully!');
});
