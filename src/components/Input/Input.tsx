import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  touched?: boolean;
  error?: string;
  Icon: IconType;
  placeholder : string;
}

const Input: FC<Props> = ({
  touched,
  error,
  className,
  placeholder,
  Icon,
  id,
  ...rest
}) => {
  return (
    <>
      <div className="flex flex-row items-center">
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}
        <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
        <input
          id={id}
          {...rest}
          required
          className={
            "appearance-none rounded-none relative block w-full px-4 py-2  placeholder-gray-400 text-gray-900 font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" +
            className
          }
          placeholder={placeholder}
        />
      </div>
      <div className=" h-px  bg-gray-300 "></div>
      <div className=" text-red-700 text-left text-xs h-5 ">
        {{ touched } && <h1>{error}</h1>}
      </div>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
