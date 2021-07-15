import { FC , memo } from 'react';
import { Link } from 'react-router-dom';

interface Props{};

const Login : FC<Props> = (props) => {
  return (
    <div>
      <h2>This is Login Page</h2>
      <h2>Dont have an account </h2>
      <Link to="/signup"><span className=" text-red-500" >Click here</span></Link>
      <Link to="/dashboard"><span className=" text-green-500" >Go to Dashboard</span></Link>

    </div>
  );
}

Login.defaultProps = {} ;

export default memo(Login);