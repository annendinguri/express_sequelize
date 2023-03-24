import { DataTypes } from 'sequelize';

const Menu= (sequelize, Sequelize) => {
  const Menu = sequelize.define("menu", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    menuname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingridients: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  });
  return Menu;
};

export default Menu;