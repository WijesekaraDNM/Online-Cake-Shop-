import { CartModel } from '../models/Cart.js';

export const getCart = async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.user._id })
      .populate('items.productId')
      .populate('items.customDesignId');

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const totalCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    res.json({ ...cart.toObject(), totalCount, totalPrice });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const addToCart = async (req, res) => {
  const { productId, customDesignId, name, price, quantity = 1, imageUrl } = req.body;
  try {
    let cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart) {
      cart = new CartModel({ userId: req.user._id, items: [] });
    }

    const existingIndex = cart.items.findIndex(item =>
      (productId && item.productId?.toString() === productId) ||
      (customDesignId && item.customDesignId?.toString() === customDesignId)
    );

    if (existingIndex !== -1) {
      cart.items[existingIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, customDesignId, name, price, quantity, imageUrl });
    }

    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.id(itemId);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    if (quantity < 1) {
      item.remove();
    } else {
      item.quantity = quantity;
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const removeCartItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    const cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items.id(itemId)?.remove();
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = [];
    await cart.save();
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
