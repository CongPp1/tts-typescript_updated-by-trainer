"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("./src/routes/todo");
const mongoose_1 = require("mongoose");
// import * as bodyParser from 'body-parser'
// import { ConnectOptions } from 'mongoose';
// import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.env = 'development';
        this.port = 3000;
        // TODO: create new function for adding routes
        console.log('aaaa');
        this.app.use('/todo', new todo_1.TodoRoute().route);
        (0, mongoose_1.connect)('mongodb://localhost:27017/vggateDb');
        console.log('bbbb');
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`running on port ${this.port}`);
        });
    }
}
exports.default = App;
// export const dbConnection = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
// export const dbConnection = {
//     url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
//     options: {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     },
//   };
