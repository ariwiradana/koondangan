import { getWishes, setWishes } from "@/controllers/wishesController";
import connectDB from "@/db/db";

connectDB();

export default async function (req, res) {
  if (req.method === "POST") {
    await setWishes(req, res);
  } else if (req.method === "GET") {
    await getWishes(req, res);
  } else {
    res.status(405).end();
  }
}
