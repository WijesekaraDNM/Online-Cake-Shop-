// import { model, Schema } from 'mongoose';

// export const UserSchema = new Schema(
//     {
//         // id: {type:String},
//         name: { type:String, required: true },
//         email: { type:String, required: true, unique: true},
//         password: {type:String, required:true },
//         address: { type:String, required: true },
//         isAdmin: { type:Boolean, default:false },
//         cart: { type: Schema.Types.ObjectId, ref: 'Cart' },      // optional
//         orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
//     },
//     {
//         timestamps: true,
//         toJSON: {
//             virtuals:true,
//         },
//         toObject: {
//             virtuals: true,
//         },
//     },
// );

// export const UserModel = model('user', UserSchema);

import { model, Schema } from 'mongoose';

export const UserSchema = new Schema(
    {
        id: {type:String},
        name: { type:String, required: true },
        email: { type:String, required: true, unique: true},
        password: {type:String, required:true },
        address: { type:String, required: true },
        isAdmin: { type:Boolean, default:false },
        cart: { type: Schema.Types.ObjectId, ref: 'Cart' },      // optional
    },
    {
        timestamps: true,
        toJSON: {
            virtuals:true,
        },
        toObject: {
            virtuals: true,
        },
    },
);

export const UserModel = model('user', UserSchema);