import { prisma } from '@root/server/prisma';
import { getSupabaseServerClient } from '@root/server/supabase';
import formidable from 'formidable';
import { createReadStream } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

interface UploadPayload {
  error?: string;
  success: boolean;
}

const uploadProfileAvatarHandler = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const supabase = getSupabaseServerClient({ req: request, res: response });
  try {
    const userId = request.headers['user-id'] as string;
    const form = formidable();
    const result = await new Promise<UploadPayload>((resolve) => {
      form.parse(request, async (err, _, files) => {
        if (!userId) {
          return response.status(401).json({ success: false });
        }
        const imagePath = `public/${userId}.png`;
        if (!Array.isArray(files.file)) {
          return resolve({ error: 'INVALID_INPUT', success: false });
        }
        const file = files.file[0];
        if (!file) {
          return resolve({ error: 'INVALID_INPUT', success: false });
        }
        try {
          await supabase.storage
            .from('avatars')
            .upload(imagePath, createReadStream(file.filepath), {
              upsert: true,
            });
          await prisma.user.update({
            data: {
              avatarUrl: imagePath,
            },
            where: { id: userId },
          });
          return resolve({ success: true });
        } catch (error) {
          return resolve({ error: 'Error uploading file', success: false });
        }
      });
    });
    return response.status('error' in result ? 400 : 200).send(result);
  } catch (error) {
    return response.status(500).send({ error: 'Internal error' });
  }
};

export default uploadProfileAvatarHandler;
