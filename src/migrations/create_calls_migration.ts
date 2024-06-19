import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Calls', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        data: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        students_presents: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        students_absent: {
            type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('Calls');
}
