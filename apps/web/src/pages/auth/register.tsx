import { useState } from 'react';
import { useAuthContext } from '@root/client/src/context/auth.context';

const Register = () => {
  const authContext = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await authContext?.singup({ name, email, password });
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
