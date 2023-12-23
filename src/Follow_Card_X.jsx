import {useState} from 'react';
import PropTypes from 'prop-types';
import './App.css'

export function Follow_Card_X({children, userCode, avatar, follow}) {
    const btn_Follow = follow ? 'ad-X-follow-card-btnFollow' : 'ad-X-follow-card';
    return (
        <article className='ad-X-follow-card'>
            <header className='ad-X-follow-card-header'>
                <img className='ad-X-follow-card-avatar' src={avatar} alt="icon Github"/>
                <div className='ad-X-follow-card-info' >
                    <strong>{children}</strong>
                    <span className='ad-X-follow-card-userCode'>{userCode}</span>
                </div>
            </header>
            <aside >
            <button className={btn_Follow}>
                <span className='initial'>{follow ? 'Siguiendo' : 'Seguir'} </span>
                <span className='hover'>✖ Dejar de seguir</span>
            </button>
            </aside>
        </article>
    );
}

Follow_Card_X.propTypes = {
    children: PropTypes.node.isRequired,
    userCode: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    follow: PropTypes.bool.isRequired,
};