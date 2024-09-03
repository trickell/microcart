/*
================================================================
Our user table model. This model will be able to pull user data 
and determine the user data we send to the client.
@author jmadrigal
================================================================
*/
import seq from '../dbconnect';
import { Sequelize, DataTypes } from 'sequelize';

const Admin = seq.define('admin', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        field: 'username',
        type: Sequelize.STRING
    },
    password: {
        field: 'password',
        type: Sequelize.STRING
    },
    name: {
        field: 'name',
        type: Sequelize.STRING
    },
    email: {
        field: 'email',
        type: Sequelize.STRING
    },
    created: {
        field: 'created',
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    roleid: {
        field: 'role_id',
        type: Sequelize.INTEGER
    }

}, {
    timestamps: false,
    freezeTableName: true
});

export default Admin;