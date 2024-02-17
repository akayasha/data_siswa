import mongoose, {Document,Model } from 'mongoose'


interface UserAttributes {
    username:String,
    email:String,
    password:String,
    role:String
}

interface UserDocument extends UserAttributes,Document {}

interface UserModel extends Model<UserDocument>{}

const userSchema = new mongoose.Schema<UserDocument,UserModel>({
    username: {type : String, required: true, unique:true},
    email: {type:String, required:true, unique: true},
    password: { type:String, required:true},
    role: { type:String, required:true}
})

const User = mongoose.model<UserDocument, UserModel>('User',userSchema)

export default User;



