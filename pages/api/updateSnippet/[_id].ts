// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as mongo from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();
    const id = { _id: new mongo.ObjectId(String(req.query._id)) };
    const params = {
      ...req.body,
      updatedAt: new Date(),
    };

    const newSnippet = await db
      .collection("snippets")
      .updateOne(id, { $set: params });

    res.status(200).json({ data: newSnippet });
  } catch (error) {
    res.json({ msg: `Delete failed. error : ${error}` });
  }
};
