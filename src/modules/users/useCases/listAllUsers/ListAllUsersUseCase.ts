import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }

    if (!userExists.admin) {
      throw new Error("User not admin!");
    }

    const user = this.usersRepository.list();

    return user;
  }
}

export { ListAllUsersUseCase };
