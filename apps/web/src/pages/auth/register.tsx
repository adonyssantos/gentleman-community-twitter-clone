import { useState } from 'react';
import { trpc } from '@root/client/trpc';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const singupMutation = trpc.auth.singup.useMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await singupMutation.mutateAsync({ name, email, password });
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Register;
