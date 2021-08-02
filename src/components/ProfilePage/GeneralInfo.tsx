import { FC, memo } from "react";
import { General_Info } from "../../models/ProfileData";
import Input from "../Input/Input";

interface Props {
  data? : General_Info;
}

const GeneralInfo: FC<Props> = (props) => {
  return (
    <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
      <h3 className=" font-medium text-lg ">GENERAL INFORMATION</h3>
      <div className="space-x-2 flex items-center mx-5 ">
        <div className=" text-center w-32 h-32 space-y-4 m-4 ">
          <img
            src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
            alt=""
          />
          <h5 className=" text-blue-700 text-sm">Upload Picture</h5>

        </div>
        <div className=" w-px bg-gray-300 h-40"></div>
        <div className=" pt-5 w-full ">
          <div className=" flex ">
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light ">First name </h4>
              <Input id={"firstname"} placeholder="Jimmy" />
            </div>
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Last Name </h4>
              <Input id={"lastName"} placeholder="Turner" />
            </div>
          </div>
          <div className="mx-4 sm:w-2/6 space-y-1">
            <h4 className=" text-sm font-light "> Date Of Birth</h4>
            <input
              type="date"
              name="dob"
              id={"dob"}
              className=" h-10 px-2 bg-gray-200"
            />
          </div>
          <div className="mx-4 mt-2 w-9/12 space-y-1">
            <h4 className=" text-sm font-light ">Profession </h4>
            <Input id={"Profession"} placeholder="Web developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

GeneralInfo.defaultProps = {};

export default memo(GeneralInfo);
