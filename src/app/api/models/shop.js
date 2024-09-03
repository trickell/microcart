/*
================================================================
Our shop table model. This model is purely for inserting the shop information when created so we can link each product relationship to this table  
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Shop = sequelize.define('shop', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    admin: {
        field: 'admin_id',
        'type': Sequelize.INTEGER
    },
    name: {
        field: 'name',
        'type': Sequelize.STRING
    },
    url: {
        field: 'url',
        'type': Sequelize.STRING
    },
    theme: {
        field: 'theme_id',
        'type': Sequelize.STRING
    }
    
    // Not sure if we need the relationship in the model or not, adding to uncomment later if needed
    // admin_id: {
    //     field: 'source',
    //     'type': Sequelize.INTEGER
    // },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Shop;