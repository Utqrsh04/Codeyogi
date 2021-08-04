import { FC, memo } from "react";
import { Work_Platform } from "../../models/ProfileData";
import Button from "../Button/Button.";

interface Props {
  data : Work_Platform
}

const WorkPlatForms: FC<Props> = ({data}) => {
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
              defaultValue={data.platforms_title}
              className=" w-full border p-2 border-gray-400 rounded-lg h-12 "
            />
          </div>
          <div>
            <h3 className=" text-sm font-light ">Description </h3>
            <input
              type="text"
              defaultValue={data.description}
              className=" w-full border p-2 border-gray-400 rounded-lg h-44 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

WorkPlatForms.defaultProps = {};

export default memo(WorkPlatForms);
