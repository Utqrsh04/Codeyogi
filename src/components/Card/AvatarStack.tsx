import { FC, memo } from "react";
import Avatar from "./Avatar";

interface Props {
  avatars: string[];
}

const AvatarStack: FC<Props> = ({ avatars }) => {
  const len = avatars.length;
  let newAvatars :string[] = [""];

  if(len>4)
    newAvatars = avatars.slice(0,4); 

  let more = 0;
  if (len > 4) {
    more = len - 4;
  }

  let displayMore = true;
  if (more === 0) displayMore = false;

  return (
    <div className=" flex -space-x-4 items-center">
      { 
      newAvatars.map((each) =>
        <Avatar avatarSrc={each} />
      )}
      {displayMore && (
        <span
          className="hover:-translate-y-1 transform  duration-500 rounded-full px-2 
          py-0.5 shadow-md text-sm bg-white text-blue-600"
        >
          +{more} More
        </span>
      )}
    </div>
  );
};

AvatarStack.defaultProps = {};

export default memo(AvatarStack);
