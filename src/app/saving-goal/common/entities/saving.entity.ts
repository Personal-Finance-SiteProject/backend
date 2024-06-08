import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from '../../../users/common/entities/users.entity';

@Entity({ name: 'saving_goal' })
export class SavingGoalEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false, name: 'goal_name' })
    goalName: string;

    @Column({ type: 'varchar', length: 150, nullable: false, name: 'description' })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, name: 'goal_amount' })
    goalAmount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, name: 'total_amount' })
    totalAmount: number;

    @Column({ type: 'int', nullable: false, default: 1, name: 'complete' })
    complete: number;

    @Column({ type: 'int', nullable: true, name: 'user_id' })
    userId: number;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'start_date' })
    startDate: Date;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'end_date' })
    endDate: Date;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'int', nullable: false, default: 1, name: 'status' })
    status: number;

    @ManyToOne(() => UsersEntity, user => user.id)
    @JoinColumn({ name: 'user_id' })
    user: UsersEntity;
}
