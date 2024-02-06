import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import { sample_users } from '../Data.js';
import { Cakes } from '../Data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);

export const dbconnect = async () => {
    try {
        connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUsers();
        await seedFoods();
        console.log('connect successfully---');
    }catch (error) {
        console.log(error);
    }
    
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount >0 ) {
        console.log('Users seed is already done!');
        return;
    }
    for ( let user of sample_users ) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('Users seed is done!');
};

async function seedFoods(){
    const foods = await FoodModel.countDocuments();
    if (foods > 0){
        console.log ('Foods seed id already done!');
        return;
    }
    for (const food of Cakes) {
        food.imageUrl = `/foods/${food.imageUrl}`;
        await FoodModel.create(food);
    }
    console.log('Food seed is done!');
    
}
