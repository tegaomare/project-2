const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
            model: "movie",
            key: "id",
            },
        },
        tvshow_id: {
            type: DataTypes.INTEGER,
            references: {
            model: "tvshow",
            key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rating'
    }
);

module.exports = Rating;