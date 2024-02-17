import mongoose, {Document,Model} from "mongoose";

interface LecturerAttributes{
    name:String,
    nip:String,
}

interface LecturerDocument extends LecturerAttributes,Document{}

interface LecturerModel extends Model<LecturerDocument>{}

const lecturerSchema = new mongoose.Schema<LecturerDocument,LecturerModel>({
    name: {type:String , required:true},
    nip:{ type:String, required:true , unique:true}
})

const Lecturer = mongoose.model<LecturerDocument,LecturerModel>('Lecturer', lecturerSchema)

export default Lecturer;