/*
================================================================
Our user table model. This model will be able to pull user data 
and determine the user data we send to the client.
@author jmadrigal
================================================================
*/
import seq from '../dbconnect';
import { Sequelize } from 'sequelize';

const User = seq.define('user', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        field: 'username',
        'type': Sequelize.STRING
    },
    name: {
        field: 'name',
        'type': Sequelize.STRING
    },
    email: {
        field: 'email',
        'type': Sequelize.STRING
    },
    created: {
        field: 'created',
        'type': Sequelize.TIME
    }

}, {
    timestamps: false,
    freezeTableName: true
});

export default User;