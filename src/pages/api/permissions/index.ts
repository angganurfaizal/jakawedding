import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getPermissions(req, res);
    case "POST":
      return await savePermissions(req, res);
    default:
      return res.status(400).send("Method not Allowed");
  }
}

const getPermissions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await pool.query("SELECT * FROM permissions");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const savePermissions = async (req: NextApiRequest, res: NextApiResponse) => {};
