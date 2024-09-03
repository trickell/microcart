/*
================================================================
Our Product table model. This model will handle pulling of the products, inserting of each record, and updating the products.
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Product = sequelize.define('product', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // shop_id: {
    //     field: 'shop_id',
    //     'type': Sequelize.INTEGER
    // },
    
    name: {
        field: 'name',
        'type': Sequelize.STRING
    },
    price: {
        field: 'price',
        'type': Sequelize.DECIMAL
    },
    image: {
        field: 'image',
        'type': Sequelize.STRING
    },
    size: {
        field: 'size',
        'type': Sequelize.STRING
    },
    details: {
        field: 'details',
        'type': Sequelize.STRING
    },
    // category_id: {
    //     field: 'category_id',
    //     'type': Sequelize.INTEGER
    // },
    keywords: {
        field: 'keywords',
        'type': Sequelize.TEXT
    },
    sku: {
        field: 'sku',
        'type': Sequelize.STRING
    },
    created: {
        field: 'created',
        'type': Sequelize.TIME
    }

}, {
    timestamps: false,
});

export default Product;