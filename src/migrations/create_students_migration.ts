import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Students', {
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
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mother_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        father_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
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
    await queryInterface.dropTable('Students');
}
