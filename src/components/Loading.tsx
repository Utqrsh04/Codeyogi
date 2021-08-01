import { FC, memo } from "react";

interface Props {}

const Loading: FC<Props> = (props) => {
  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r h-screen from-blue-50 to-blue-100 p-10">
      <div className="flex justify-around h-screen items-center">
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150 cursor-not-allowed"
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading Your Page
          </button>
        </span>
      </div>
    </div>
  );
};

Loading.defaultProps = {};

export default memo(Loading);
