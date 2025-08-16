import { model, Schema } from 'mongoose';

const OrderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Food', required: false },
  customDesignId: { type: Schema.Types.ObjectId, ref: 'CustomDesign', required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String },
});

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Dispatched', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    deliveryAddress: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const OrderModel = model('Order', OrderSchema);
