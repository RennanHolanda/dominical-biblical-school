import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Teachers', {
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
        phone_number: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {  // Corrigido para 'password'
            type: DataTypes.STRING(50),
            allowNull: false,
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
    await queryInterface.dropTable('Teachers');
}
