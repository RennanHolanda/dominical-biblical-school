import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Classes', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        teacherId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Teachers',
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
    await queryInterface.dropTable('Classes');
}
