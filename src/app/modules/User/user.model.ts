import { IUser } from "./user.interface";
import { CallbackError, Document, Model, Schema, model } from "mongoose";
interface TUserDocument extends IUser, Document {}
import bcrypt from "bcrypt";
import config from "../../config";
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const userSchema: Schema<TUserDocument> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validateEmail,
        message: "Invalid Email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      default: "user",
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      const saltRounds = parseInt(config.saltRounds);
      const hashedPassword = await bcrypt.hash(this.password, saltRounds);
      this.password = hashedPassword;
    } catch (error) {
      return next(error as CallbackError);
    }
  }
  next();
});
const User: Model<TUserDocument> = model<TUserDocument>("User", userSchema);
export default User;
