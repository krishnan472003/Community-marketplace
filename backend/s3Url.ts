import { Router } from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";
import { promisify } from "util";

const randomBytesAsync = promisify(randomBytes);

const region = process.env.REGION;
const bucketName = process.env.BUCKET_NAME
const accessKeyId = process.env.AWS_ID;
const secretAccessKey = process.env.AWS_SECRET;

// const s3 = new S3({
//     credentials: {
//         accessKeyId,
//         secretAccessKey
//     },

//     region
// });

// async function generateUploadURL() {
//     const rawBytes = await randomBytesAsync(16);
//     const imageName = rawBytes.toString('hex');
  
//     const params = {
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: new Date(Date.now() + 60000) 
//     };
    
//     const uploadURL = await getSignedUrl(s3, new PutObjectCommand(params), {
//     });
//     return uploadURL;
// }

export const s3Url = () => {
    const router = Router();
    router.get('/url', async (req, res) => {
        try {
            const url = await generateUploadURL();
            res.json({ url });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    return router;
};
