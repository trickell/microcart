/*
================================================================
Our address table model. This model will be able to pull address data 
and determine the address data we send to the client.
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Address = sequelize.define('address', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        field: 'user_id',
        'type': Sequelize.INTEGER
    },
    
    street: {
        field: 'street',
        'type': Sequelize.STRING
    },
    street_2: {
        field: 'street_2',
        'type': Sequelize.STRING
    },
    city: {
        field: 'state',
        'type': Sequelize.STRING
    },
    zip: {
        field: 'zip',
        'type': Sequelize.STRING
    },
    created: {
        field: 'created',
        'type': Sequelize.TIME
    }

}, {
    timestamps: true,
});

export default Address;