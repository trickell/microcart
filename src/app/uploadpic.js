import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ dest: '/path/to/save/uploads' });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post((req, res) => {
  // req.file is the 'file' file
  res.status(200).json({ data: 'success' });
});

export default handler;