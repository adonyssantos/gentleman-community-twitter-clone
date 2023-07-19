import { useState } from 'react';
import { Button } from '@root/ui/common/Button';
import { ImagePicker } from '@root/ui/forms/ImagePicker';
import { useRouter } from 'next/router';

const GettingStarted = () => {
  const { token, email } = useRouter().query;
  const [image, setImage] = useState<Blob | null>(null);

  const onFinish = async (image: string) => {
    const blob = await fetch(image).then((r) => r.blob());
    setImage(blob);
  };

  const fetchData = async () => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    /* formData.set('token', token as string);
    formData.set('email', email as string); */
    formData.set('files', image);
    await fetch('/api/gettingStarted', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return (
    <div>
      <ImagePicker onFinish={onFinish} />
      <Button onPress={() => fetchData()}>Submit</Button>
    </div>
  );
};

export default GettingStarted;
