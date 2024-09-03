/*
================================================================
Our category table model. This will hold all the PRODUCT categories and parent categories for the products.
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Categories = sequelize.define('categories', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'name',
        'type': Sequelize.STRING
    },
    
    // Not sure if we need the relationship in the model or not, adding to uncomment later if needed
    // parent_id: {
    //     field: 'source',
    //     'type': Sequelize.INTEGER
    // },

}, {
    timestamps: false,
});

export default Categories;