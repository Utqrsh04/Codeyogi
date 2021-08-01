import { FC, memo } from "react";

interface Props {}

const About: FC<Props> = (props) => {
  return (
    <>
      <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
        <h3 className=" font-medium text-lg ">ABOUT</h3>
        <div className=" my-6 mx-8 ">
          <h3 className=" text-sm font-light ">Bio</h3>
          <div className=" pt-2">
          <input type="text" className=" w-full border border-gray-400 rounded-lg h-44 "/>
          </div>
        </div>
      </div>
    </>
  );
};

About.defaultProps = {};

export default memo(About);
