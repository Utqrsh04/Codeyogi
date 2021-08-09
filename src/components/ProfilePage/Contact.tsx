import { FC, memo } from "react";

interface Props {
  data: any;
}

const ContactComponent: FC<Props> = ({ data }) => {
  return (
    <>
      {/* <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
              <h3 className=" font-medium text-lg ">CONTACT</h3>
              <div className=" my-6 mx-8 space-y-8">
                <div className=" flex">
                  <div className="mx-4 sm:w-2/6">
                    <h4 className=" text-sm font-light "> Hometown </h4>
                    <input
                      type="text"
                      id="address"
                      defaultValue={user!.hometown}
                      className=" h-10 w-full p-2 border border-gray-400 rounded-lg"
                    />
                  </div>
                  <div className="mx-4 sm:w-2/6 space-y-1">
                    <h4 className=" text-sm font-light "> Home State Code </h4>
                    <input
                      type="text"
                      id="location"
                      defaultValue={user!.home_state_code}
                      className=" h-10 w-full p-2 border border-gray-400 rounded-lg  "
                    />
                  </div>
                </div>
                <div className=" flex">
                  <div className="mx-4 sm:w-2/6 space-y-1">
                    <h4 className=" text-sm font-light "> Phone </h4>
                    <input
                      type=""
                      id="phone_number"
                      defaultValue={user!.phone_number}
                      className=" h-10 w-full p-2 border border-gray-400 rounded-lg"
                    />
                  </div>
                  <div className="mx-4 sm:w-2/6 space-y-1">
                    <h4 className=" text-sm font-light "> Email </h4>
                    <input
                      type="email"
                      id="email"
                      defaultValue={user!.email}
                      className=" h-10 w-full p-2 border border-gray-400 rounded-lg  "
                    />
                  </div>
                </div>
              </div>
            </div> */}
    </>
  );
};

ContactComponent.defaultProps = {};

export default memo(ContactComponent);
