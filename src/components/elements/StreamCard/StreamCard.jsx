import React from 'react';
import ProfilePicture from '../../../assets/png/ProfilePicture.png';
import css from './StreamCard.module.scss';
import { useRandomName } from '../../../hooks/useRandonName';
import { ReactComponent as VisibleIcon } from '../../../assets/svg/VisibleIcon.svg';
import { useRandomPoster } from '../../../hooks/useRandomPoster';
import { Link } from 'react-router-dom';

const StreamCard = ({ streamName, streamCategory, streamId, streamDescription, authorAddress }) => {
    const randomName = useRandomName();
    const randomPoster = useRandomPoster();

    return (
        <Link to={`/viewStream/${streamId}`} className={css.CardBlock}>
            <img
                src={randomPoster}
                alt='poster of stream'
            />
            <h5>{streamName}</h5>
            <div className={css.LowerBlock}>
                <div className={css.StreamerInfo}>
                    <img
                        src={ProfilePicture}
                        alt='ass'
                    />
                    <p>{randomName}</p>
                </div>
                <div className={css.WatchersInfo}>
                    <VisibleIcon /> 123456
                </div>
            </div>
        </Link>
    );
};

export default StreamCard;