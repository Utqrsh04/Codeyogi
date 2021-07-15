import { FC , memo } from 'react';
import {Link} from 'react-router-dom'

interface Props{};

const Dashboard : FC<Props> = (props) => {
  return (
    <>
      <h2>This is dashboard Component</h2>
      <Link to="/recordings"><span className=" text-blue-500" >Go to Recordings</span></Link>
    </>
  );
}

Dashboard.defaultProps = {} ;

export default memo(Dashboard);