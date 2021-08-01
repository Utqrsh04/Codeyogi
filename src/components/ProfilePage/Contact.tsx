import { FC, memo } from "react";

interface Props {}

const Contact: FC<Props> = (props) => {
  return (
    <>
      <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
        <h3 className=" font-medium text-lg ">CONTACT</h3>
        <div className=" my-6 mx-8 space-y-8">
          <div className=" flex">
            <div className="mx-4 sm:w-2/6 ">
              <h4 className=" text-sm font-light "> Country </h4>
              <select
                name="country"
                id="country"
                className=" bg-white h-10 w-full border border-gray-400 rounded-lg"
              >
                <option selected>United States</option>
                <option>India</option>
                <option>Japan</option>
                <option>China</option>
                <option>Brazil</option>
                <option>Norway</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="mx-4 sm:w-2/6">
              <h4 className=" text-sm font-light "> Address </h4>
              <input
                type="text"
                id="address"
                placeholder="New York"
                className=" h-10 w-full border border-gray-400 rounded-lg"
              />
            </div>
          </div>
          <div className=" flex">
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Location </h4>
              <input
                type="text"
                id="location"
                placeholder="jkhsafkj"
                className=" h-10 w-full border border-gray-400 rounded-lg  "
              />
            </div>
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Phone </h4>
              <input
                type=""
                id="PhoneNumber"
                placeholder="76127846433"
                className=" h-10 w-full border border-gray-400 rounded-lg"
              />
            </div>
          </div>
          <div className=" flex">
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Email </h4>
              <input
                type="email"
                id="email"
                placeholder="jimmy@gmail.com"
                className=" h-10 w-full border border-gray-400 rounded-lg  "
              />
            </div>
            <div className="mx-4 sm:w-2/6 space-y-1">
              <h4 className=" text-sm font-light "> Website </h4>
              <input
                type="url"
                id="url"
                placeholder="Write your website"
                className=" h-10 w-full border border-gray-400 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Contact.defaultProps = {};

export default memo(Contact);
