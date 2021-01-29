// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import * as mongo from "mongodb";
import { connectToDatabase } from "../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();

    const newSnippet = await db.collection("snippets").insertOne(req.body);

    res.status(200).json({ data: newSnippet.ops[0] });
  } catch (error) {
    res.json({ msg: `Delete failed. error : ${error}` });
  }
};
