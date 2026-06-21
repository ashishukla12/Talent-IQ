import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  clerkId:{
    type: String,
    required: true,
    unique: true,
  }
},
{ timestamps: true} // createdAt, updatedAt
);

// member since 2020 like this info using timestamps

const User = mongoose.model("User", userSchema);

export default User;