import mongoose, { Document, Model, Types } from "mongoose";

interface MataPelajaranAttributes {
    name: String,
    code: String,
}

interface MataPelajaranDocument extends MataPelajaranAttributes, Document {}

interface MataPelajaranModel extends Model<MataPelajaranDocument> {}

const mataPelajaranSchema = new mongoose.Schema<MataPelajaranDocument, MataPelajaranModel>({
    name: { type: String, required: true },
    code: { type: String, required: true },
});

const MataPelajaran = mongoose.model<MataPelajaranDocument, MataPelajaranModel>('MataPelajaran', mataPelajaranSchema);

export default MataPelajaran;
