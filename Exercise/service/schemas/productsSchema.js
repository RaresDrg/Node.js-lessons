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
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false }
);

const Product = model("product", schema);

export default Product;
