import { FC , memo } from 'react';
import {Link} from 'react-router-dom'

interface Props{};

const Signup : FC<Props> = (props) => {
  return (
    <>
     <h2>This is Signup Component</h2> 
     <h2>Already have an account </h2>
      <Link to="/login"><span className=" text-red-500" >Click here</span></Link>

    </>
  );
}

Signup.defaultProps = {} ;

export default memo(Signup);