// @ts-nocheck
// function for add product

import connectCloudinary from "../db/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/ProductModel.js";





import fs from 'fs'
import { log } from "console";
// import {multer} from 'multer'




const addproduct = async ( req, res ) =>
{

    let image_filename = `${req.file.filename}`;
    
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
    
     const image1 = req.files.image1[0] && req.files.image1[0]
        const image2 = req.files.image2[0] && req.files.image2[0]
        const image3 = req.files.image3[0] && req.files.image3[0]
    const image4 = req.files.image4[ 0 ] && req.files.image4[ 0 ]
    
     const images = [ image1, image2, image3, image4].filter((item)=> item !== undefined )
    
    
      images = image_filename


    const product = new productModel({
      name,
            description,
            category,
            price: Number( price ),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse( sizes ),
            image: images,
            date: Date.now()
    })

    try {
        await product.save();
        return res.json({success:true,message:"Product Added"})
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,message:"Error"
        })
        
    }

// res.send("wow")

}


const addProduct = async (req,res) =>
{
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

       

        const image1 = req.files.image1 && req.files.image1.length > 0 ? req.files.image1[ 0 ] : null;
        const image2 = req.files.image2 && req.files.image2.length > 0 ? req.files.image2[ 0 ] : null;
        const image3 = req.files.image3 && req.files.image3.length > 0 ? req.files.image3[ 0 ] : null;
        const image4 = req.files.image4 && req.files.image4.length > 0 ? req.files.image4[ 0 ] : null;
       
        
         const images  = [ image1, image2, image3, image4 ].filter(  (item)  => item !== null && item !== undefined ) 
        console.log(images);
        
        
        //  console.log( name, description, price, category, subCategory, sizes, bestseller );
        // console.log(image1,image2,image3,image4);
        
        

       
        
        
    
        
        
        
        console.log(images);
        
        let imagesUrl = await Promise.all(
            images.map( async ( item ) =>
            {
                let result = await cloudinary.uploader.upload( item.path, { resource_type: 'image' } )
                return result.secure_url
                // console.log(imagesUrl);
                
            })
        )

        //  console.log( name, description, price, category, subCategory, sizes, bestseller );
        // console.log( imagesUrl );
        const productData = {
            name,
            description,
            category,
            price: Number( price ),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse( sizes ),
            image: imagesUrl,
            date: Date.now()
        }
        
console.log(productData);


        const product = new productModel( productData );

        await product.save()

        return res.json({success:true, message: "Product added successfully"})

        // console.log(productData);
        

        //   return res.json({}) 

    } catch ( error )
    {
        console.log(error);
        
        return res.json({success:false,message:error.message})
    }
}

//function for list product
const listProducts = async (req,res) =>
{
    try {
        const products = await productModel.find( {} )
        return res.json({success:true,products})
    } catch (error) {
        console.log(error);
        
        return res.json({success:false,message:error.message})
    }
}

//function fpr remove product
const removeProduct = async (req,res) =>
{
try {
    await productModel.findByIdAndDelete( req.body.id )
    return res.json({success:true, message: "Product removed"})
} catch (error) {
     console.log(error);
        
        return res.json({success:false,message:error.message})
}
}

//function for getting single product
const singleProduct = async (req,res) =>
{
    try {
        const { productId } = req.body
        const product = await productModel.findById( productId )
        
        return res.json({success:true,product})
    } catch (error) {
         console.log(error);
        
        return res.json({success:false,message:error.message})
    }
}

export
{
    addProduct,
    listProducts,
    removeProduct,
    singleProduct,
    addproduct
}