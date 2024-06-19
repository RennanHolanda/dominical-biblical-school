import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('ClassOfferings', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        offerings: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        classId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Classes',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        callId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Calls',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.dropTable('ClassOfferings');
}
