import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists!");
        }

        if (user.admin === false) {
            throw new Error("Must be Admin to acess the list of users");
        }

        const users = this.usersRepository.list();

        return users;
    }
}

export { ListAllUsersUseCase };
