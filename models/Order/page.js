import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    userid: { type: String, required: true },
    transactionid: { type: String, unique: true, required: true },
    product: {
      type: Object, // Accepts a nested object with custom keys
      required: true,
    },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "verification pending  " },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
