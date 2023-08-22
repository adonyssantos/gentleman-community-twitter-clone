import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <Link href='/auth/register'>Register</Link>
      <Link href='/auth/login'>Login</Link>
      <Link href='/auth/gettingStarted'>Getting Started</Link>
    </div>
  );
};

export default index;
