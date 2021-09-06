import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {}

const Dashboard: FC<Props> = () => {
  return (
    <div className="relative">
      <section className="space-x-5 flex justify-center h-screen">
        <div className="bg-gray-300 flex justify-center w-full text-center items-center ">
          <h1 className={" text-xl font-semibold ml-20 "}>This is Dashboard</h1>
          <Link to="/groups" className="font-bold text-lg">
            Groups Page
          </Link>
        </div>
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
