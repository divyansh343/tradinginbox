import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import { blogController } from "../../../controllers/blog/create";

const handler = nc();
mongoConnect()

handler.post(blogController)

export default handler;