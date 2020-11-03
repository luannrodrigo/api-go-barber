import { v4 as uuid } from 'uuid';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const createdUser = new User();

    Object.assign(createdUser, { id: uuid(), name, email, password });

    this.users.push(createdUser);

    return createdUser;
  }

  public async save(user: User): Promise<User> {
    const findUserByIndex = this.users.findIndex(
      findUser => findUser.id === user.id,
    );
    this.users[findUserByIndex] = user;

    return user;
  }
}

export default UsersRepository;