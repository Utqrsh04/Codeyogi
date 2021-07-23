import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";
import { IconType } from "react-icons";
import { FaSpinner } from "react-icons/fa";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "Primary" | "Secondry" | "Danger";
  children: string;
  Icon: IconType;
  isSubmmiting?: boolean;
}

const Button: FC<Props> = ({
  children,
  className,
  theme,
  isSubmmiting,
  Icon,
  ...rest
}) => {
  let themeClasses = "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";

  if (theme === "Danger")
    themeClasses = "bg-red-500 hover:bg-red-600 focus:ring-indigo-500";
  else if (theme === "Secondry")
    themeClasses = "bg-gray-600 hover:bg-gray-700 focus:ring-indigo-500";

  const iconThemeClasses =
    theme === "Primary" ? "group-hover:text-indigo-300 text-indigo-500" : "";

  return (
    <>
      <button
        {...rest}
        className={
          "w-auto group mx-auto relative flex items-center justify-between py-2 sm:px-4 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2   " +
          themeClasses +
          " " +
          className
        }
      >
        {Icon && (
          // <span className=" left-0 px-1">
          <>
            {isSubmmiting && <FaSpinner className="animate-spin -mx-2" />}
            <Icon
              className={" w-5 h-5 mx-2 " + iconThemeClasses}
              aria-hidden="true"
            />
          </>
          // </span>
        )}
        <h1 className=" mr-2 ">{children}</h1>
      </button>
    </>
  );
};

Button.defaultProps = {
  theme: "Primary",
};

export default memo(Button);
