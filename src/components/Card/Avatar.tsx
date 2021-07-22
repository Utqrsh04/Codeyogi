import { FC, memo } from "react";

interface Props {}

const Avatar: FC<Props> = (props) => {
  return (
    <>
      <div className=" border-2 border-white shadow-xl rounded-full bg-pink-400 w-14 h-14 "></div>
    </>
  );
};

Avatar.defaultProps = {};

export default memo(Avatar);
