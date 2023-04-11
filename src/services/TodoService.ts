import User from "../models/user";


class TodoService {
    constructor() {
    }
    
    public async getUsers(): Promise<any> {
        const usersList = await User.find()
        // console.log(usersList)
        return usersList;
    }

    public async getUserById(id: string): Promise<any> {
        const user = await User.findById(id)
        return user;
    }

    public async createUser(data: Record<string, any>) {
        const newUser = await User.create(data)
        return newUser;
    }

    public async updateUser(id: string, data: Record<string, any>) {
        const updatedUser = await User.findByIdAndUpdate(id, data);
        return updatedUser;
    }

    public async deleteUser(id: string) : Promise<any> {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    }
}

export default TodoService;
