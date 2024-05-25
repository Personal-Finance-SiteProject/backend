import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from '../../../users/common/entities/users.entity'

@Entity({ name: 'category_expense' })
export class CategoryExpenseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    type: string;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @Column({ type: 'int', nullable: false, default: 1 })
    status: number;

    @Column({ type: 'int', nullable: true, name: 'id_creator_user' })
    idCreatorUser: number;

    @ManyToOne(() => UsersEntity, user => user.id)
    @JoinColumn({ name: 'id_creator_user' })
    creatorUser: UsersEntity;
}
