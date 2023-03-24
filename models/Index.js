import { Sequelize } from 'sequelize';

import sequelize from '../config/db.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

import Role from './Role.js';
db.Role = Role(sequelize, Sequelize);

import UserRole from "./UserRole.js";
db.UserRole = UserRole(sequelize, Sequelize);

import TableOrder from "./TableOrder.js";
db.TableOrder = TableOrder(sequelize, Sequelize);

import CustomerOrder from "./CustomerOrder.js";
db.CustomerOrder = CustomerOrder(sequelize, Sequelize);

import TableReservation from "./TableReservation.js";
db.TableReservation = TableReservation(sequelize, Sequelize);

import Admin from "./Admin.js";
db.Admin= Admin(sequelize, Sequelize);

import Table from "./Table.js";
db.Table = Table(sequelize, Sequelize);

import Customer from "./customer.js";
db.Customer = Customer(sequelize, Sequelize);

import Menu from "./Menu.js";
db.Menu = Menu(sequelize, Sequelize);

import Reservation from "./Reservation.js";
db.Reservation = Reservation(sequelize, Sequelize);

import Order from "./Order.js";
db.Order = Order(sequelize, Sequelize);


//Role & User has Many-To-Many Relationship
db.Table.belongsToMany(db.Order, {
    through: "table_order",
    foreignKey: "table_id",
    otherKey: "order_id"
  });
  
  db.Order.belongsToMany(db.Table, {
    through: "order_table",
    foreignKey: "order_id",
    otherKey: "table_id"
  });
  
  //User & Student has One-To-One Relationship
  db.Order.hasOne(db.Customer);
  
  db.Table.belongsTo(db.Customer, {
      foreignKey: "table_id"
  });
  
  //Student & Course has Many-To-Many Relationship
  db.Reservation.belongsToMany(db.Table, {
      through: "reservation_table",
      foreignKey: "reservation_id",
      otherKey: "table_id"
    });
    
    db.Table.belongsToMany(db.Reservation, {
      through: "table_resevstion",
      foreignKey: "reservation_id",
      otherKey: "table_id"
    });
  
  



export default db;