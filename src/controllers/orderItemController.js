const OrderItem = require('../models/orderItem');

class OrderItemController {
    static async createOrderItem(req, res) {
        console.dir(req.params)
        const { idOrder } = req.params;
        const { idProduct, quantity } = req.body;
        try {
            const orderItem = await OrderItem.create({ idOrder, idProduct, quantity });
            res.status(201).json({ message: 'Produto relacionado a ordem com sucesso', orderItem });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao relacionar o produto a ordem', detalhes: error.message });
        }
    }
}

module.exports = OrderItemController