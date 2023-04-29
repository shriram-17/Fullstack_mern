"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const body_parser_1 = __importDefault(require("body-parser"));
exports.UserRoute = (0, express_1.default)();
let prisma = new client_1.PrismaClient();
//MIDDLEWARE
exports.UserRoute.use(body_parser_1.default.urlencoded({ extended: true }));
exports.UserRoute.use(body_parser_1.default.json());
exports.UserRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
//ROUTES
exports.UserRoute.get('/', (req, res) => {
    return res.send("Your in User Page");
});
exports.UserRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const user = yield prisma.user.create({
        data: {
            'name': name,
            'email': email
        }
    });
    return res.send('Form submitted successfully!');
}));
exports.UserRoute.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return res.send(users);
}));
