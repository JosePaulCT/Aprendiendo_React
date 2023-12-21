import './App.css'

export function Follow_Card_X({children, userCode, avatar, follow}) {
    return (
        <article className='ad-X-follow-card'>
            <header className='ad-X-follow-card-header'>
                <img className='ad-X-follow-card-avatar' src={avatar} alt="icon Github"/>
                <div className='ad-X-follow-card-info' >
                    <strong>{children}</strong>
                    <span className='ad-X-follow-card-userCode'>{userCode}</span>
                </div>
            </header>
            <aside>
                <button className='ad-X-follow-card-btnFollow'>
                    {follow ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    );
}