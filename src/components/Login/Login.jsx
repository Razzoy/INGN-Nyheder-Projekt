import style from './Login.module.scss'

export function Login() {
    return (
        <form>
            <h2>Log ind</h2>
            <fieldset>
                <label htmlFor="user">Brugernavn:</label>
                <input id="user" type="text" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password:</label>
                <input type="text" />
            </fieldset>
            <button>Log ind</button>
        </form>
    )
}
