import { FC , memo } from 'react';

interface Props{};

const AuthHero : FC<Props> = (props) => {
  return (
    <div className="bg-indigo-900  hidden lg:block w-1/2 h-screen text-white right-0  bg-AuthHeroImg bg-no-repeat bg-center fixed  ">
    </div>
  );
}

AuthHero.defaultProps = {} ;

export default memo(AuthHero);