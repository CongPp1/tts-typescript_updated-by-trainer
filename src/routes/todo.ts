import { Router } from "express";
import { TodoController } from "../controller/TodoController";

export class TodoRoute {
    public route: Router = Router();
    private todoController: TodoController = new TodoController();

    public constructor() {
        this.initRoute();
    }

    private initRoute() {
        this.route.get("/getUsers", this.todoController.getUsers);
        this.route.get("/getUser/:id", this.todoController.getUserById);
        this.route.post("/createUser", this.todoController.createUser);
        this.route.put("/updateUser/:id", this.todoController.updateUser);
        this.route.delete("/deleteUser/:id", this.todoController.deleteUser);
    }
}
