import { OrderModel } from '../models/Order.js';
import { CartModel } from '../models/Cart.js';

export const createOrder = async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const { deliveryAddress, deliveryDate } = req.body;

    if (!deliveryAddress || !deliveryDate) {
      return res.status(400).json({ message: 'Delivery address and date are required' });
    }

    const order = new OrderModel({
      userId: req.user._id,
      items: cart.items,
      totalPrice,
      deliveryAddress,
      deliveryDate,
      paymentStatus: 'Pending',
    });

    await order.save();

    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findOne({ _id: req.params.orderId, userId: req.user._id });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
