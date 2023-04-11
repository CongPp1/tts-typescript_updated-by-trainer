import { Request, Response, NextFunction } from "express";
import TodoService from "../services/TodoService";
// TODO: import User models
// TODO: add service with OOP coding style

export class TodoController {
    // TODO: create new private user service
    // private const userService: UserSerivce = new UserService();
    private todoService: TodoService = new TodoService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.todoService.getUsers();
            // console.log(users);
            return res.status(200).send({ message: 'Success!', data: users });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "ERROR!", error });
        }
    }

    public getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.todoService.getUserById(req.params.id);
            return res.status(200).send({ message: 'Success!', data: user });
        } catch (error) {
            return res.status(500).send({ message: "ERROR!", error });
        }
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.todoService.createUser(req.body);
            return res.status(200).send({ message: 'Success!', data: result });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "ERROR!", error });
        }
    }

    public updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.todoService.updateUser(req.params.id ,req.body);
            return res.status(200).send({ message: 'Success!', data: result });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "ERROR!", error });
        }
    }

    public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            await this.todoService.deleteUser(req.params.id)
            return res.status(200).send({ message: 'Success!' });
        } catch(error){
            console.log(error)
            return res.status(200).send({ message: 'Success!' });
        };
    }

}
