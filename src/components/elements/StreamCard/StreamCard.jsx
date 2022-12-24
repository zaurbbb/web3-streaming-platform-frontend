import React from 'react';
import ProfilePicture from '../../../assets/png/ProfilePicture.png';
import css from './StreamCard.module.scss';
import { useRandomName } from '../../../hooks/useRandonName';

const StreamCard = ({ streamName, streamCategory, streamId, streamDescription, authorAddress }) => {
    const randomName = useRandomName();
    return (
        <article className={css.CardBlock}>
            <img
                src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-gaming-channel-cover-pubg-design-template-5bb7634f9086f1a434e3edded2b3ad07_screen.jpg?ts=1574671678'
                alt='poster of stream'
            />
            <h3>{streamName}</h3>
            <div>
                <div>
                    <img
                        src={ProfilePicture}
                        alt='ass'
                    />
                    <p>{randomName}</p>
                </div>

                <div>

                </div>
            </div>
        </article>
    );
};

export default StreamCard;