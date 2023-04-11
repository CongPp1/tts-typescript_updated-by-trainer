"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoute = void 0;
const express_1 = require("express");
const TodoController_1 = require("../controller/TodoController");
class TodoRoute {
    constructor() {
        this.route = (0, express_1.Router)();
        this.todoController = new TodoController_1.TodoController();
        this.initRoute();
    }
    initRoute() {
        this.route.get("/getUsers", this.todoController.getUsers);
        this.route.get("/getUser/:id", this.todoController.getUserById);
        this.route.post("/createUser", this.todoController.createUser);
        this.route.put("/updateUser/:id", this.todoController.updateUser);
        this.route.delete("/deleteUser/:id", this.todoController.deleteUser);
    }
}
exports.TodoRoute = TodoRoute;
