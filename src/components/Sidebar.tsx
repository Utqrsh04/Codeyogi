import { FC , memo } from 'react';

interface Props{};

const Sidebar : FC<Props> = (props) => {
  return (
    <div className=" h-screen w-80 bg-gray-300 ">
      This is Sidebar
    </div>
  );
}

Sidebar.defaultProps = {} ;

export default memo(Sidebar);