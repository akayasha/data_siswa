import mongoose, {Document,Model,Types} from "mongoose";

interface MateriAttributes {
    name: String,
    Lecturer: mongoose.Types.ObjectId,
    content:String,
    MataPelajaran:Types.ObjectId
}

interface MateriDocument extends MateriAttributes,Document{}

interface MateriModel extends Model<MateriDocument>{}

const materiSchemaa = new mongoose.Schema<MateriDocument,MateriModel>({
    name: { type: String, required:true},
    Lecturer: {type: mongoose.Schema.Types.ObjectId , ref:'Lecturer' ,required:true},
    content: {type:String},
    MataPelajaran:{type: mongoose.Schema.Types.ObjectId, ref:'MataPelajaran',required:true}
})

const Materi = mongoose.model<MateriDocument,MateriModel>('Materi',materiSchemaa);

export default Materi;