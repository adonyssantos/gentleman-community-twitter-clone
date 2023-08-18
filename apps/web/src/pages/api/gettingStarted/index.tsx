import uploadProfileAvatarHandler from '@root/server/routes/cdn/uploadProfileAvatar';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default uploadProfileAvatarHandler;
