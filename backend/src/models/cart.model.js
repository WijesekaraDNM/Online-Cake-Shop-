import { model, Schema } from 'mongoose';

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Food', required: false },  // For regular cake item
  customDesignId: { type: Schema.Types.ObjectId, ref: 'CustomDesign', required: false },  // For custom design
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  imageUrl: { type: String }, // Food or Custom design image URL
});

const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [CartItemSchema],
  },
  { timestamps: true }
);

export const CartModel = model('Cart', CartSchema);
