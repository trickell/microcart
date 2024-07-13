/*
================================================================
Our user table model. This model will be able to pull user data 
and determine the user data we send to the client.
@author jmadrigal
================================================================
*/
import seq from '../dbconnect';
import { Sequelize } from 'sequelize';

const User = seq.define('User', {
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
        field: 'name',
        'type': Sequelize.STRING
    },
    created: {
        field: 'created',
        'type': Sequelize.TIME
    }

}, {
    timestamps: true,
});

export default User;