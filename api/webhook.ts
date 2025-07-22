import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const event = request.headers['x-github-event'];
  const payload = request.body;

  console.log('---');
  console.log(`Received GitHub event: "${event}"`);

  if (event === 'installation') {
    if (payload.action === 'created') {
      const installationId = payload.installation.id;
      // In a real app, you would save this to your database.
      console.log(`✅ New installation created with ID: ${installationId}`);
    } else if (payload.action === 'deleted') {
      const installationId = payload.installation.id;
      // In a real app, you would remove this from your database.
      console.log(`🗑️ Installation with ID ${installationId} was uninstalled.`);
    }
  }

  response.status(200).json({
    message: 'Webhook received successfully!',
    event,
  });
} 