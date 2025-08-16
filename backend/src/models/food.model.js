// import { model,Schema } from 'mongoose';

// const ReviewSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     rating: { type: Number, required: true, min: 1, max: 5 },
//     comment: { type: String },
//     createdAt: { type: Date, default: Date.now },
//   });

// export const FoodSchema = new Schema(
//     {
//         // id: {type:String, required: true},
//         name: { type:String, required: true },
//         price: { type:Number, required:true},
//         imageUrl: { type:String, required: true },
//         tags: { type: [String] },

//         reviews: { type: [ReviewSchema], default: [] },
//         likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//     },
//     {
//         toJSON: {
//             virtuals:true,
//         },
//         toObject: {
//             virtuals: true,
//         },
//         timestamps: true,
//     },
// );

// export const FoodModel = model('food', FoodSchema);

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