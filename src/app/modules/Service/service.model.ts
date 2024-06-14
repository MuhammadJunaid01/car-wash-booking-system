import mongoose, { Schema, Document } from "mongoose";
import { IService } from "./service.interface";

// Define TypeScript interface for the document
interface TServiceDocument extends Document, IService {}

const serviceSchema: Schema<TServiceDocument> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Title of the service is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: [0, "Duration must be a positive number in minutes"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
serviceSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
serviceSchema.pre("findOne", async function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});
const Service = mongoose.model<TServiceDocument>("Service", serviceSchema);
export default Service;
