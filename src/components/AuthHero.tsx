import { FC , memo } from 'react';

interface Props{};

const AuthHero : FC<Props> = (props) => {
  return (
    <div className=" h-screen bg-no-repeat w-1/2 bg-indigo-900 hidden lg:block ">
    </div>
  );
}

AuthHero.defaultProps = {} ;

export default memo(AuthHero);