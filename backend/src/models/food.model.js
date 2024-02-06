import { model,Schema } from 'mongoose';

export const FoodSchema = new Schema(
    {
        id: {type:String, required: true},
        name: { type:String, required: true },
        price: { type:Number, required:true},
        imageUrl: { type:String, required: true },
        tags: { type: [String] },
    },
    {
        toJSON: {
            virtuals:true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    },
);

export const FoodModel = model('food', FoodSchema);