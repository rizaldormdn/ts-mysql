"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class userRoutes {
    constructor() {
        this.route = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.route.post('/', userController_1.default.createUser);
        this.route.get('/', userController_1.default.getUser);
        this.route.get('/:id', userController_1.default.getUSerById);
        this.route.put('/:id', userController_1.default.updateUSer);
        this.route.delete('/:id', userController_1.default.deleteUser);
    }
}
exports.default = new userRoutes().route;
