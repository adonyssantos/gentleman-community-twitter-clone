import supabase from '../config/supabaseClient';

const Home = () => {
  console.log(supabase, 'SUPAAABASE');
  return <div className='page home'>SUPABASE TEST</div>;
};

export default Home;
