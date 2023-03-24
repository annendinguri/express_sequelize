import db from "../models/index.js";

const TableOrder = db.TableOrder;

const getAllTableOrders = async (req, res) => {
    try {
        const response = await TableOrder.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No table oder  found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getTableOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await TableOrder.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "table order not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createTableOrder = async (req, res) => {
    try {
        const response = await TableOrder.create(req.body);
        res.status(201).json({"message": "TableOrder created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateTableOrderById = async (req, res) => {
    const { table_id, order_id } = req.params;
    
    try {
        const [ response ] = await TableOrder.update(
            {
                "order_id": order_id,
                "table_id": table_id},
                { where: { table_id: table_id, order_id: order_id }});
        if(response === 0){
            res.status(404).json({"message": "Table order not found"});
        }else if(response){
            res.status(201).json({"message": "Table order updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTableOrderById = async (req, res) => {
    const { table_id, order_id } = req.params;

    try {
        const response = await TableOrder.destroy({where: { table_id: table_id, order_id: order_id }})
        if(response === 0){
            res.status(404).json({"message": "User role not found"});
        }else if(response){
            res.status(200).json({"message": "User role deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createTableOrder, getAllTableOrders, getTableOrderById, updateTableOrderById, deleteTableOrderById };
