import db from "../models/index.js";

const CustomerOrder = db.CustomerOrder;

const getAllCustomerOrders = async (req, res) => {
    try {
        const response = await CustomerOrder.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No customer order found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCustomerOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await CustomerOrder.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Customer Order not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createCustomerOrder = async (req, res) => {
    try {
        const response = await CustomerOrder.create(req.body);
        res.status(201).json({"message": "CustomerOrder created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateCustomerOrderById = async (req, res) => {
    const { customer_id, order_id } = req.params;
    
    try {
        const [ response ] = await CustomerOrder.update(
            {
                "order_id": order_id,
                "customer_id": customer_id},
                { where: { customer_id: customer_id, order_id: order_id }});
        if(response === 0){
            res.status(404).json({"message": "Customer order not found"});
        }else if(response){
            res.status(201).json({"message": "Customer order updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteCustomerOrderById = async (req, res) => {
    const { customer_id, order_id } = req.params;

    try {
        const response = await CustomerOrder.destroy({where: { customer_id: customer_id, order_id: order_id }})
        if(response === 0){
            res.status(404).json({"message": "Customer order not found"});
        }else if(response){
            res.status(200).json({"message": "Customer order deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createCustomerOrder, getAllCustomerOrders, getCustomerOrderById, updateCustomerOrderById, deleteCustomerOrderById };
