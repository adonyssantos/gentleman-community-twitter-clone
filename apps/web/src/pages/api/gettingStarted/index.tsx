import { getSupabaseServerClient } from '@root/server/supabase';
import formidable from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';

interface IUploadPayload {
  error?: string;
  success: boolean;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadProfileAvatarHandler = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  try {
    const supabase = getSupabaseServerClient({ req: request, res: response });
    const form = formidable();

    const result = await new Promise<IUploadPayload>((resolve) => {
      form.parse(request, async (err, { email, token, refresh }, files) => {
        const jwt = request.headers.authorization?.split('Bearer ')[1];
        const { data, error } = await supabase.auth.getUser(jwt);
        console.log(data, error);
        const { data: sessionData, error: sessionError } = await supabase.auth.verifyOtp({
          type: 'magiclink',
          email: email[0],
          token: token[0],
        });
        supabase.auth.getSession();
        /* console.log(sessionData, sessionError);
        if (sessionError || !sessionData.session) {
          return response.status(401).json({ success: false });
        }
        const imagePath = `public/${sessionData.session.user.id}.png`;
        const file = files.file;
        if (!file || Array.isArray(file)) {
          return resolve({ error: 'INVALID_INPUT', success: false });
        }
        try {
          await supabase.storage
            .from('avatars')
            .upload(imagePath, fs.createReadStream(file.filepath), {
              upsert: true,
            });
          await prisma.user.update({
            data: {
              avatarUrl: imagePath,
            },
            where: { id: sessionData.session?.user.id },
          });
          return resolve({ success: true });
        } catch (error) {
          return resolve({ error: 'Error uploading file', success: false });
        } */
      });
    });
    response.status('error' in result ? 400 : 200).send(result);
  } catch (error) {
    response.status(500).send({ error: 'Internal error' });
  }
};

export default uploadProfileAvatarHandler;
