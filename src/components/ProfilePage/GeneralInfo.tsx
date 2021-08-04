import { FC, memo } from "react";
import { General_Info } from "../../models/ProfileData";

interface Props {
  data: General_Info;
}

const GeneralInfo: FC<Props> = ({ data }) => {
  return (
    <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
      <h3 className=" font-medium text-lg ">GENERAL INFORMATION</h3>
      <div className="space-x-2 flex items-center mx-5 ">
        <div className=" text-center w-32 h-32 space-y-4 m-4 ">
          <img
            src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
            alt=""
          />
          <h4 className=" text-blue-700 text-sm">Upload Picture</h4>
        </div>
        <div className=" w-px bg-gray-300 h-40"></div>
        <div className=" pt-5 w-full ">
          <div className=" flex ">
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light ">First name </h4>
              <input
                type="text"
                className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
                id={data.first_name}
                placeholder=""
                defaultValue={data.first_name}
              />
            </div>
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Last Name </h4>
              <input
                type="text"
                className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
                id={"lastName"}
                placeholder=""
                defaultValue={data.last_name}
              />
            </div>
          </div>
          <div className="mx-4 sm:w-2/6 space-y-1">
            <h4 className=" text-sm font-light "> Date Of Birth</h4>
            <input
              type="date"
              name="dob"
              id={"dob"}
              defaultValue={data.dob}
              className=" h-10 px-2"
            />
          </div>
          <div className="mx-4 mt-2 w-9/12 space-y-1">
            <h4 className=" text-sm font-light ">Profession </h4>
            <input
              type="text"
              className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
              id={"Profession"}
              placeholder="Web developer"
              defaultValue={data.profession}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GeneralInfo.defaultProps = {};

export default memo(GeneralInfo);
