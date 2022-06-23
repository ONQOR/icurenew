import { getStrapiMedia } from '../../../utils';
import delve from 'dlv';
import ReactPlayer from 'react-player';
import React, { useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faP, faPlay } from '@fortawesome/free-solid-svg-icons'

const Visual = ({ video, images, image }) => {
  const [playing, setPlaying] = useState(false)
  const [controller, setController] = useState(false)
  const [btn, setBtn] = useState(1)
  const btnClick = () => {
    setController(true)
    setPlaying(true)
    setBtn(2)
  }


  if (video) {
    return (
      <div className='video__container center'>
        <ReactPlayer 
          url={getStrapiMedia(delve(image, "data.attributes.url"))}
          playing={playing}
          controls={controller}
          width={"100%"}
          height={'auto'}
        >
        </ReactPlayer>
        <button 
          onClick={() => btnClick()}
          className={btn === 2 ? 'none' : '' }
        >
            <FontAwesomeIcon icon={faPlay} />
        </button>
        <img 
          src={getStrapiMedia(delve(images, "data.attributes.url"))}
          className={btn === 2 ? 'none' : '' }
        />
      </div>
    );
  } else {
    return (
        <img
        src={getStrapiMedia(delve(image, "data.attributes.url"))}
        className="relative mx-auto shadow-lg rounded-lg w-auto"
      />
    );
  }
};

Visual.defaultProps = {};

export default Visual;
