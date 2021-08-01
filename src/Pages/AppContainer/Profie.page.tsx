import { FC, memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";
import Input from "../../components/Input/Input";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {}

const Profie: FC<Props> = (props) => {
  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  return (
    <div>
      <div className=" w-screen ">
        <div className="text-center ">
          <Header />
          <div className="bg-white mb-2 sm:px-5 sm:pr-10 pr-2 text-gray-700 h-14 flex flex-row justify-between items-center">
            <div className=" flex items-center space-x-1 justify-evenly ">
              <button className=" m-2 w-6 h-6" onClick={toggleSidebar}>
                <GiHamburgerMenu />
              </button>
              <h2 className="font-semibold">Users / Account Settings</h2>
            </div>

            <div className="w-40 sm:block hidden h-16 mt-4 py-2">
              <Dropdown
                items={["Settings", "Mail", "Print", "Download", "Share"]}
                needArrowIcon={true}
              >
                Settings
              </Dropdown>
            </div>
          </div>
        </div>

        <section className="space-x-5 flex">
          <Sidebar classes={sidebarClass} />
          <div className=" bg-red-200 w-full ">
            <div>
              <div className=" my-5 p-4 bg-blue-200 items-center ">
                <h3>General Information</h3>
                <div className=" flex items-center px-5 ">
                  <div className=" text-center w-32 h-32 bg-gray-400 m-4 ">
                    Profile Picture
                  </div>
                  <div className=" pt-5 w-full ">
                    <div className=" mx-4 sm:w-2/6">
                      <h4>First name </h4>
                      <Input id={"firstname"} placeholder="Jimmy Turner" />
                    </div>
                    <div className="mx-4 w-9/12">
                      <h4>Profession </h4>
                      <Input id={"Profession"} placeholder="Web developer" />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" my-5 p-4 bg-blue-200 items-center ">
                About
                <div className=" p-5 ">
                  <h3>Bio</h3>
                  <div className="w-auto box-border">
                    <textarea
                      className=" p-5 rounded-xl "
                      name="bio"
                      id="bio"
                      cols={110}
                      rows={8}
                    >
                      I'm Creative Director and UI/UX Designer from Sydney,
                      Australia, working in web development and print media. I
                      enjoy turning complex problems into simple, beautiful and
                      intuitive designs. My job is to build your website so that
                      it is functional and user-friendly but at the same time
                      attractive. Moreover, I add personal touch to your product
                      and make sure that is eye-catching and easy to use. My aim
                      is to bring across your message and identity in the most
                      creative way. I created web design for many famous brand
                      companies.
                    </textarea>
                  </div>
                </div>
              </div>
              <div className=" my-5 p-3 bg-blue-200 items-center ">
                <h3>Work Platforms</h3>
                <div className=" p-4 ">
                  <div className="  ">
                    <h3>Platforms Title</h3>
                    <Input placeholder="Web Design" id="Platforms Title" />
                  </div>
                  <div className=" ">
                    <h3>Description</h3>
                    <div className="w-auto  box-border">
                      <textarea
                        className=" p-5 rounded-xl "
                        name="Description"
                        id="Description"
                        cols={110}
                        rows={8}
                      >
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse eu fugiat nulla pariatur..
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <footer className=" w-full bg-blue-400 bottom-0 fixed h-10  ">
              This is footer
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

Profie.defaultProps = {};

export default memo(Profie);
