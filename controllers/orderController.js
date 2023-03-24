import db from "../models/index.js";

const Order = db.Order;

const getAllOrders = async (req, res) => {
    try {
        const response = await Order.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No order found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Order.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "order not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createOrder = async (req, res) => {
    const order = req.body;

    try {
        const response = await Order.create(order);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Order created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateOrderById = async (req, res) => {
    const { id } = req.params;
    const { order_id,date_ordered, total_amount} = req.body;
    try {
        const [ response ] = await Order.update(
            {
                "order_id": order_id,
                "date_ordered": date_ordered,
                "total_amount": total_amount},
                { where: { order_id: id}});
        if(response === 0){
            res.status(404).json({"message": "order not found"});
        }else if(response){
            res.status(201).json({"message": "order updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Order.destroy({where: {order_id: id}})
        if(response === 0){
            res.status(404).json({"message": "Order not found"});
        }else if(response){
            res.status(200).json({"message": "Order deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createOrder, getAllOrders, getOrderById, updateOrderById, deleteOrderById };

