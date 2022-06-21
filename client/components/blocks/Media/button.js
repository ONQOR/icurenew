import Link from 'next/link';
import { getStrapiMedia } from '../../../utils';
import delve from 'dlv';
import ReactPlayer from 'react-player'
import React, { useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faP, faPlay } from '@fortawesome/free-solid-svg-icons'

const Button = ({ setPlaying, setController, playing }) => {
    {playing? (
        setPlaying(true)
      ) : (
        <button onClick={() => setPlaying(true)}>
            <FontAwesomeIcon icon={faPlay} />
        </button>
    )}
};

Button.defaultProps = {};

export default Button;
