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
            <textarea
              className=" p-2 rounded-xl"
              name="bio"
              id="bio"
              cols={100}
              rows={8}
            >
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              complex problems into simple, beautiful and intuitive designs. My
              job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, I add
              personal touch to your product and make sure that is eye-catching
              and easy to use. My aim is to bring across your message and
              identity in the most creative way. I created web design for many
              famous brand companies.
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};

About.defaultProps = {};

export default memo(About);
