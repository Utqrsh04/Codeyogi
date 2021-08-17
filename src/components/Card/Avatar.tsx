import { FC, memo } from "react";

interface Props {
  avatarSrc?: string;
  theme?: "small" | "medium" | "large";
}

const Avatar: FC<Props> = ({ avatarSrc, theme }) => {
  let themeclasses = " w-14  h-14 ";

  if (theme === "small") themeclasses = " w-10 h-10 ";
  else if (theme === "medium") themeclasses = " w-12  h-12 ";
  return (
    <div
      className={
        " border-2 border-white shadow-xl rounded-full " + { themeclasses }
      }
    >
      <img className=" rounded-full " src={avatarSrc} alt="" />
    </div>
  );
};

Avatar.defaultProps = {
  avatarSrc: "https://www.lifeofpix.com/wp-content/uploads/2016/12/avatar.png",
  theme: "large",
};

export default memo(Avatar);
