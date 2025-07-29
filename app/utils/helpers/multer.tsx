import multer from 'multer';

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req: any, file: any, cb: any) => {
    console.log("I am running...")
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Only images are allowed'), false);
};

const upload = multer({ storage, fileFilter });

export default upload;