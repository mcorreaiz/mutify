import mongoose from 'mongoose';


const extendSchema = (Schema, obj) => (
    new mongoose.Schema(
        Object.assign({}, Schema.obj, obj)
    )
);

export default extendSchema;