import { FC, memo } from "react";

interface Props {
  avatarSrc : string
}

const Avatar: FC<Props> = ({avatarSrc}) => {
  return (
    <>
      <div
        className=" border-2 border-white shadow-xl rounded-full
       w-14 h-14 "
      >
        <img
          className=" rounded-full "
          src={avatarSrc}
          alt=""
        />
      </div>
    </>
  );
};

Avatar.defaultProps = {
  avatarSrc : "https://www.lifeofpix.com/wp-content/uploads/2016/12/avatar.png"

};

export default memo(Avatar);
