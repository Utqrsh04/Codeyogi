import { FC , memo } from 'react';
import {useParams} from 'react-router-dom'

interface Props{};

const Lecture : FC<Props> = (props) => {

  const {lectureNumber , batchNumber } = useParams<any>(); 

  return (
    <div className=" text-xl font-semibold ">
      <h1>Showing data of lecture# {lectureNumber} of batch# {batchNumber}</h1>
    </div>
  );
}

Lecture.defaultProps = {} ;

export default memo(Lecture);