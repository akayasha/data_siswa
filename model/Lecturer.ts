import mongoose, {Document,Model} from "mongoose";
import User from './User';

interface LecturerAttributes{
    userId:String,
    name:String,
    nip:String   
}

interface LecturerDocument extends LecturerAttributes,Document{}

interface LecturerModel extends Model<LecturerDocument>{}

const lecturerSchema = new mongoose.Schema<LecturerDocument,LecturerModel>({
    userId: {type:String, required:true},
    name: {type:String , required:true},
    nip:{ type:String, required:true , unique:true}
})

const Lecturer = mongoose.model<LecturerDocument,LecturerModel>('Lecturer', lecturerSchema)

export default Lecturer;