import { model, Schema } from 'mongoose';

const CustomDesignSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    occasion: { type: String, required: true },
    flavor: { type: String, required: true },
    size: { type: String, required: true },
    colorScheme: { type: String },
    deliveryDate: { type: Date, required: true },
    budget: { type: String, required: true },
    specialRequests: { type: String },
    referenceImageUrl: { type: String }, // URL or path to uploaded image
    price: { type: Number, required: true }, // Calculated or entered price
  },
  {
    timestamps: true,
  }
);

export const CustomDesignModel = model('CustomDesign', CustomDesignSchema);
