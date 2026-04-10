// import React from 'react';

import './Intro.css';
 
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../Constants'
import { useState, useRef } from 'react';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    const handleVideoClick = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    return (
        <div className='app__video'>
            <video
                src={meal}
                ref={vidRef}
                type='video/mp4'
                controls={false}
                muted
            />

            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={handleVideoClick}
                >
                    {
                        playVideo ? (
                            <BsPauseFill color='#fff' fontSize={30} />
                        )
                            : <BsFillPlayFill color='#fff' fontSize={30} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Intro
