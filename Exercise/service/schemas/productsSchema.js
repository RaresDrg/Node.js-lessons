import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: [true, "Set product name"],
    },
    size: {
      type: String,
      required: [true, "Set product size"],
    },
    type: {
      type: String,
      enum: {
        values: ["shoes", "tshirt", "trousers"],
        message: "=> is either: shoes, tshirt or trousers`",
      },
      required: [true, "Set product type"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    // email: {
    //   type: String,
    //   match: [
    //     /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    //     "enter a valid email address",
    //   ],
    //   required: [true, "=> this field is required"],
    // },
    // phone: {
    //   type: String,
    //   minLength: [10, "phone number should have 10 digits"],
    //   maxLength: [10, "phone number should have 10 digits"],
    //   match: [/\d{10}/, "phone number should only have digits"],
    //   required: [true, "=> this field is required"],
    // },
  },
  { versionKey: false } // collection: products => poate fi adaugata in obiectul din stanga
);

const Product = model("product", schema);

export default Product;
