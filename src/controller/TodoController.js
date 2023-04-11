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
exports.TodoController = void 0;
const TodoService_1 = __importDefault(require("../services/TodoService"));
// TODO: import User models
// TODO: add service with OOP coding style
class TodoController {
    constructor() {
        // TODO: create new private user service
        // private const userService: UserSerivce = new UserService();
        this.todoService = new TodoService_1.default();
        this.getUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.todoService.getUsers();
                // console.log(users);
                return res.status(200).send({ message: 'Success!', data: users });
            }
            catch (error) {
                console.log(error);
                return res.status(500).send({ message: "ERROR!", error });
            }
        });
        this.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.todoService.getUserById(req.params.id);
                return res.status(200).send({ message: 'Success!', data: user });
            }
            catch (error) {
                return res.status(500).send({ message: "ERROR!", error });
            }
        });
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.todoService.createUser(req.body);
                return res.status(200).send({ message: 'Success!', data: result });
            }
            catch (error) {
                console.log(error);
                return res.status(500).send({ message: "ERROR!", error });
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.todoService.updateUser(req.params.id, req.body);
                return res.status(200).send({ message: 'Success!', data: result });
            }
            catch (error) {
                console.log(error);
                return res.status(500).send({ message: "ERROR!", error });
            }
        });
        this.deleteUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoService.deleteUser(req.params.id);
                return res.status(200).send({ message: 'Success!' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).send({ message: 'Success!' });
            }
            ;
        });
    }
}
exports.TodoController = TodoController;
