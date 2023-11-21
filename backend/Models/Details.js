import mongoose, { Schema } from "mongoose";

const DetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Details", DetailsSchema);
