// pages/api/create-room.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const roomcode = uuidv4(); // Generate a unique room code
    // Optionally, save the room data to a database (e.g., MongoDB)
    res.status(200).json({ roomcode });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
