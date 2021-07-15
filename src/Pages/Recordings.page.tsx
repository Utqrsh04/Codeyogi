import { FC , memo } from 'react';
import {Link} from 'react-router-dom'

interface Props{};

const Recordings : FC<Props> = (props) => {
  return (
    <>
      <h2>This is Recordings Component</h2>
      <Link to="/dashboard"><span className=" text-blue-600 " >Go to Dashboard</span> </Link>
    </>
  );
}

Recordings.defaultProps = {} ;

export default memo(Recordings);