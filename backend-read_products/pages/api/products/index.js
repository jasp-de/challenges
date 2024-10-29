import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const products = await Product.find();
      return response.status(200).json(products);
    } else {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return response.status(500).json({ error: error.message });
  }
}
