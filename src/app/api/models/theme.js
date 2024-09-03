/*
================================================================
Our theme table model. This model will give us a list of themes currently available to the users and hold the theme  
so we can just pull the data when needed.
@author jmadrigal
================================================================
*/
import sequelize from '../dbconnect';
import { Sequelize } from 'sequelize';

const Theme = sequelize.define('theme', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'name',
        'type': Sequelize.INTEGER
    },
    
    source: {
        field: 'source',
        'type': Sequelize.STRING
    },

}, {
    timestamps: false,
});

export default Theme;  