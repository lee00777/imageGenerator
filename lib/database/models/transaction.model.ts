import { Schema, model, models } from "mongoose";

// user와 image를 연결해주는 역할. 즉, user가 image 생성할때마다 credits차감하고 트랙킹하는 용도

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;