import { model, Schema } from 'mongoose';

const MessageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    sender: { type: String, enum: ['user', 'admin'], required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const MessageModel = model('Message', MessageSchema);
