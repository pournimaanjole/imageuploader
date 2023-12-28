import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from 'multer';
import cors from 'cors'
import path  from 'path';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const connecttomonodb = async()=>{
    const response = await mongoose.connect(process.env.MONGODB_URI)
    if(response){
        console.log("connected to mongodb")
    }
}
connecttomonodb();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/imges')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const upload = multer({ storage: storage })


  app.post('/api/v1/upload' ,upload.single('file'), (req,res)=>{
console.log(req.file)

  }) 

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server is on ")
})
 