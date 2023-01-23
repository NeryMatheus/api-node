const { Service: ServiceModel } = require('../models/Service');

const serviceController = {
    /* Post */
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, message: "Serviço cadastrado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },

    /* GetAll */
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error);
        }
    },

    /* GetById */
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
                      
            if (!service) {
                res.status(404).json({ message: "Nenhum serviço encontrado!" });
                return; 
            }

            res.json(service);
        } catch (error) {
            console.log(error);
        }
    },

    /* Delete */
    delete: async (req, res) => {
        try {
            
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ message: "Nenhum serviço encontrado  ao deletar!" });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({ deletedService, message: "Serviço deletado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },

    /* Update */
    update: async (req, res) => {
        
        const id = req.params.id;
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
        if(!updatedService){
            res.status(404).json({ message: "Nenhum serviço encontrado ao atualizar!" });
            return;
        }

        res.status(200).json({ updatedService, message: "Serviço atualizado com sucesso!" });        
    }
};

module.exports = serviceController;