import { model, Schema } from "mongoose";


const userSchema = new Schema({
    auth0Id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    addressLine1: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    }
})


const User = model('User', userSchema);

export default User; 