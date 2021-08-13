import React, { InputHTMLAttributes } from "react";

interface ProfileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  touched?: boolean;
  error?: string;
  type?: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  touched,
  error,
  label,
  type,
  id,
  ...rest
}) => {
  return (
    <>
      <div className={" " + (!touched || !error ? "pb-4 " : " ")}>
        <label htmlFor={id} className="text-sm text-searchBar-text ">
          {label}
        </label>

        <input
          type={type}
          id={id}
          {...rest}
          className={
            "box-border w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none text-dark-300 " +
            (touched && error
              ? "border-red-500"
              : "border-gray-300 focus:border-primary-200")
          }
        />
      </div>

      {touched && <div className="text-xs text-red-600">{error}</div>}
    </>
  );
};

ProfileInput.defaultProps = {
  type: "text",
};

export default React.memo(ProfileInput);
