import mongoose, {Document,Model} from "mongoose";

interface SiswaAttributes {
    name:String,
    kelas:String,
    mataPelajaran:String[],
    ranking: Int32Array
}

interface SiswaDocument extends SiswaAttributes,Document{}

interface SiswaModel extends Model<SiswaDocument>{}

const siswaSchema = new mongoose.Schema<SiswaDocument,SiswaModel>({
    name: {type:String, required: true},
    kelas: {type:String, require: true},
    mataPelajaran: {type:Array},
    ranking:{type:Int32Array}
})

const Siswa = mongoose.model<SiswaDocument, SiswaModel>('Siswa', siswaSchema)

export default Siswa;