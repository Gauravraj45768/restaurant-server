const Product  = require("../models/productmodel.js");

const cloudinary = require("cloudinary").v2;
async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
const createproduct = async (req, res) => {
  try {
    console.log("create product");
    const {  caption, description, rating, price } = req.body;
    console.log( caption, description, rating, price);
    const file = req.files.image;
    const response = await uploadFileToCloudinary(file, "productimages"); //folder->images
      console.log(response);
      //db me entry save kafro 
      let newProduct=new Product({
       
          imageUrl: response.secure_url,
          caption,
        description,
        price,
          rating,
        });
      await newProduct.save();      
      
      res.json({
          success: true,
          message: "Image uploaded to Cloudinary",
          newProduct: newProduct,
          imageUrl: response.secure_url,
          })
    
  } catch (err) {
      console.log(err);
      res.status(500).send('server error');
      }
};
module.exports = createproduct;

    