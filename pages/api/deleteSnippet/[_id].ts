// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as mongo from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();
    const params = { _id: new mongo.ObjectId(String(req.query._id)) };

    const result = await db.collection("snippets").deleteOne(params);
    res.json({ result });
  } catch (error) {
    res.json({ msg: `Delete failed. error : ${error}` });
  }
};
