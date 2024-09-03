/*
================================================================
Our Order table model. This will keep up with the users orders in each shop and handle the order data and status of the order
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Order = sequelize.define('order', {
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
    created: {
        field: 'created',
        'type': Sequelize.TIME
    },
    shipping_id: {
        field: 'shipping_id',
        'type': Sequelize.INTEGER
    },        
    status: {
        field: 'status',
        'type': Sequelize.STRING
    },
}, {
    timestamps: false,
});

export default Order;