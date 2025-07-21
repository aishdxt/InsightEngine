import type { Request, Response } from 'express';
import express from 'express';

const app = express();
app.use(express.json());

// This is the single endpoint our Vercel function will expose.
app.post('/api/register-installation', (req: Request, res: Response) => {
  const { installation_id } = req.body;

  if (!installation_id) {
    return res.status(400).json({ message: 'Installation ID is required.' });
  }

  // In a real application, you would save this ID to your database here.
  // This links the GitHub installation to a user account in your system.
  console.log(`✅ Received installation ID from Kanpur: ${installation_id}`);
  
  res.status(200).json({ 
    message: `Installation ${installation_id} successfully registered on the backend.` 
  });
});

// This default export is what Vercel uses to create the serverless function.
export default app;