const { Schema, model } = require("mongoose");

const portfolioSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    name_coin: {
      type: String,
      required: true,
    },
    actual_price: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

portfolioSchema.methods.toJSON = function () {

  const { status, __v, ...data } = this.toObject();


  return data;
}

module.exports = model("Portfolio", portfolioSchema);
