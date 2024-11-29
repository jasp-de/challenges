import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  const updatedProduct = request.body;

  if (request.method === "PUT") {
    const product = await Product.findByIdAndUpdate(id, updatedProduct);
    response.status(200).json({ status: "Product sucessfully updated." });
  }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    response.status(200).json(product);
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    // Declare jokeToDelete to be the joke identified by its id and delete it.
    // This line handles the entire deletion process.
    response
      .status(200)
      .json({ status: `Product ${id} successfully deleted.` });
  }
}
