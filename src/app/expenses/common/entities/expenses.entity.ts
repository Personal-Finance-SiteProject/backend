import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from '../../../users/common/entities/users.entity';
import { CategoryExpenseEntity } from '../../../category-expenses/common/entities/category.entity';

@Entity({ name: 'expenses' })
export class ExpensesEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'timestamp', nullable: false })
    spentDate: Date;

    @Column({ type: 'varchar', length: 100, nullable: false })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    amount: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    necessarySpent: number;

    @Column({ type: 'int', nullable: true, name: 'user_id' })
    userId: number;

    @Column({ type: 'int', nullable: true, name: 'category_id' })
    categoryId: number;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'int', nullable: false, default: 1 })
    status: number;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => UsersEntity, user => user.id)
    @JoinColumn({ name: 'user_id' })
    user: UsersEntity;

    @ManyToOne(() => CategoryExpenseEntity, category => category.id)
    @JoinColumn({ name: 'category_id' })
    category: CategoryExpenseEntity;
}
