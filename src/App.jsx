import { Follow_Card_X } from './Follow_Card_X';

export function App() {
    return (
        <>
        <Follow_Card_X
            userCode='@adriave'
            avatar='https://avatars.githubusercontent.com/u/75256717?v=4'
            follow={true}
        >
        Adrian Castro Villanueva
        </Follow_Card_X>

        <br/>
        <Follow_Card_X
            userCode='@Pauldev'
            avatar='https://avatars.githubusercontent.com/u/75256717?v=4'
            follow={true}
        >
        Jose Paul Campos Terrones
        </Follow_Card_X>

        </>
    );
}