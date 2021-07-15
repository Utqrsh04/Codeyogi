import { FC , memo } from 'react';

interface Props{};

const AuthHero : FC<Props> = (props) => {
  return (
    <div className=" h-screen w-1/2 bg-hero-auth ">
      
    </div>
  );
}

AuthHero.defaultProps = {} ;

export default memo(AuthHero);