import { FC, memo } from 'react';
import { useHistory } from "react-router-dom";


interface Props { };

const NotFound: FC<Props> = (props) => {

  const history = useHistory();

  return (
    <div className="text-center space-y-10 py-72 h-screen w-screen bg-gray-200">
      <h1 className=" text-red-700 text-4xl ">404 Error Page Not Found !</h1>
      <div className="flex mx-auto justify-center items-center space-x-3 ">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:border-gray-700" onClick={() => history.goBack()}>Go Back</button>

        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700"
          onClick={() => history.push("/dashboard")}>Go to Dashboard</button>
      </div>
    </div>
  );
}

NotFound.defaultProps = {};

export default memo(NotFound);