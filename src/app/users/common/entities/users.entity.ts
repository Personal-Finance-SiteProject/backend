import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, name: 'full_name' })
    fullName: string;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 20, nullable: false, name: 'user_name' })
    userName: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    password: string;

    @Column({ type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    avatar: string;

    @Column({ type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'int', nullable: false, default: 1 })
    status: number;
}
