import db from "../models/index.js";

const Customer = db.Customer;

const getAllCustomers = async (req, res) => {
    try {
        const response = await Customer.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No Customer found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Customer.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Customer not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createCustomer = async (req, res) => {
    const Customer = req.body;

    try {
        const response = await Customer.create(Customer);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Customer created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateCustomerById = async (req, res) => {
    const { id } = req.params;
    const { Customername, email, password} = req.body;
    try {
        const [ response ] = await Customer.update(
            {
                "Customername": Customername,
                "email": email,
                "password": password},
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Customer not found"});
        }else if(response){
            res.status(201).json({"message": "Customer updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteCustomerById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Customer.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "Customer not found"});
        }else if(response){
            res.status(200).json({"message": "Customer deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createCustomer, getAllCustomers, getCustomerById, updateCustomerById, deleteCustomerById };

