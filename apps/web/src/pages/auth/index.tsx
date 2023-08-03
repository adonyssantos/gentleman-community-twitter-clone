import React, { useState } from 'react';
import { useAuthContext } from '@root/client/context/auth.context';

const Index = () => {
  const auth = useAuthContext();

  const [email, setImail] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await auth?.passwordReset({ email });
    const { data, error } = result ?? {}; // Set data and error to {} (empty object) if result is undefined or null

    console.log(data, error);
  };

  const onSingup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await auth?.({ email });
    const { data, error } = result ?? {}; // Set data and error to {} (empty object) if result is undefined or null

    console.log(data, error);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='email' onChange={(e) => setImail(e.target.value)} />
        <input type='submit' value='submit' />
      </form>
      <br />
      <form onSubmit={onSingup}>
        <input type='email' onChange={(e) => setImail(e.target.value)} />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default Index;
