import Thumbnail from '../thumbnail/thumbnail';
import styles from './request.module.css';
//import FlipMove from 'react-flip-move';

export function Request({results}) {
  return <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 ">
     { results.map((result) => (
        <Thumbnail key={result.id} result={result} /> 
     ))
     }
    </div>
}

export default Request;
