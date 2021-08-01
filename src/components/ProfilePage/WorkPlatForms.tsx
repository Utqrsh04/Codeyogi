import { FC, memo } from "react";
import Button from "../Button/Button.";

interface Props {}

const WorkPlatForms: FC<Props> = (props) => {
  return (
    <>
      <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
        <h3 className=" font-medium text-lg ">WORK PLATFORMS</h3>
        <div className=" my-6 mx-8">
          <div className="">
            <Button >Add</Button>
          </div>
          <div>
            <h3 className=" text-sm font-light ">Platforms Title</h3>
            <input
              type="text"
              className=" w-full border border-gray-400 rounded-lg h-12 "
            />
          </div>
          <div>
            <h3 className=" text-sm font-light ">Description </h3>
            <input
              type="text"
              className=" w-full border border-gray-400 rounded-lg h-44 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

WorkPlatForms.defaultProps = {};

export default memo(WorkPlatForms);
