import { FC , memo } from 'react';

interface Props{};

const NotFound : FC<Props> = (props) => {
  return (
    <div className="text-center py-72 h-screen w-screen bg-gray-200">
      <h1 className=" text-red-700 text-4xl ">404 Error NOT FOUND !</h1>
    </div>
  );
}

NotFound.defaultProps = {} ;

export default memo(NotFound);