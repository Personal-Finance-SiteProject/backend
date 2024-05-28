import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../common/entities/users.entity';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) {
    }


    async createOrUpdateUser(model: Partial<UsersEntity>): Promise<UsersEntity> {
        try {
            let user: UsersEntity;
            if (model.id) {
                user = await this.usersRepository.findOne({where: {id: model.id}});
                if (user) {
                    user = this.usersRepository.merge(user, {
                        ...model,
                        updatedAt: new Date(),
                    });
                    await this.usersRepository.save(user);
                }
            }
            if (!user) {
                user = this.usersRepository.create({
                    ...model,
                    createdAt: new Date(),
                });
                await this.usersRepository.save(user);
            }
            return user;
        } catch (error) {
            if (error.code === '23505') {
                const message = model.id ? 'Email must be unique update' : 'Email must be unique create';
                throw new Error(message);
            }
            throw error;
        }
    }

    async findUserById(id: number): Promise<UsersEntity> {
        try {
            return await this.usersRepository.findOne({
                select: ['id', 'fullName', 'email', 'userName', 'avatar'],
                where: {id: id},
            });
        } catch (error) {
            throw error;
        }
    }


    async findUserByUserName(username: string): Promise<UsersEntity | undefined> {
        try {
            return await this.usersRepository.findOne({
                select: ['id', 'fullName', 'email', 'userName', 'password', 'createdAt', 'avatar', 'updatedAt', 'status'],
                where: {
                    userName: username,
                    status: 1
                }
            });
        } catch (err) {
            throw err;
        }
    }

    async deleteUsers(model: { id: number }): Promise<UsersEntity> {
        try {
            await this.usersRepository.update(model.id, {
                updatedAt: new Date(),
                status: 0,
            });

            return await this.usersRepository.findOne({where: {id: model.id}});
        } catch (error) {
            throw error;
        }
    }


}
