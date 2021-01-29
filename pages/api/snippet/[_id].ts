// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as mongo from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();
    const params = { _id: new mongo.ObjectId(String(req.query._id)) };

    // const result = await db.collection("snippets").deleteOne(params);
    const snippet = await db.collection("snippets").find(params).toArray();

    res.status(200).json(snippet);
  } catch (error) {
    res.json({ msg: `Delete failed. error : ${error}` });
  }
};
