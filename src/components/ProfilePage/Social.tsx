import { FC, memo } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface Props {
  data:any;
}

const SocialComponent: FC<Props> = ({data}) => {
  return (
    <>
      <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
        <h3 className=" font-medium text-lg ">SOCIAL</h3>
        <div className=" my-6 mx-8 space-y-8">
          <div className=" flex">
            <div className="mx-4 sm:w-2/6 flex space-x-2 items-center ">
              <div className=" w-16 h-10 flex justify-center items-center bg-gray-300 rounded-md ">
                <FaLinkedinIn className=" w-7 h-7 " />
              </div>
              <input
                type="text"
                id="linkedIn"
                defaultValue={data.linkedin}
                className=" h-10 w-full border p-2 border-gray-400 rounded-lg"
              />
            </div>
            <div className="mx-4 sm:w-2/6 flex space-x-2 items-center">
              <div className=" w-16 h-10 flex justify-center items-center bg-gray-300 rounded-md ">
                <FaGithub className=" w-7 h-7 " />
              </div>
              <input
                type="text"
                id="github"
                defaultValue={data.github}
                className=" h-10 w-full border p-2 border-gray-400 rounded-lg"
              />
            </div>
          </div>
          <div className=" flex">
            <div className="mx-4 sm:w-2/6 flex space-x-2 items-center space-y-1">
              <div className=" w-16 h-10 flex justify-center items-center bg-gray-300 rounded-md ">
                <FaTwitter className=" w-7 h-7 " />
              </div>
              <input
                type="text"
                id="twitter"
                defaultValue={data.twitter}
                className=" h-10 w-full border p-2 border-gray-400 rounded-lg  "
              />
            </div>
            <div className="mx-4 sm:w-2/6 flex space-x-2 items-center space-y-1">
              <div className="w-16 h-10 flex justify-center items-center bg-gray-300 rounded-md ">
                <FaFacebookF className=" w-7 h-7 " />
              </div>
              <input
                type="text"
                id="facebook"
                defaultValue={data.facebook}
                className=" h-10 w-full border p-2 border-gray-400 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SocialComponent.defaultProps = {};

export default memo(SocialComponent);
