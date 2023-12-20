import './App.css'
export function App() {
    return(
        <article className='ad-X-follow-card'>
        <header className='ad-X-follow-card-header'>
        <img className='ad-X-follow-card-avatar'
        src="https://avatars.githubusercontent.com/u/100632406?v=4" alt="icon Github"/>
        <div className='ad-X-follow-card-info' >
        <strong >Jose Paul Campos Terrones</strong>
        <span className='ad-X-follow-card-userCode' >@Akidev</span>
        </div>
        </header>
        <aside>
            <button className='ad-X-follow-card-btnFollow'>
            Seguir
            </button>
        </aside>
        </article>

    )
}