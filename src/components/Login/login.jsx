import style from "./login.module.css"
import LoginForm from "./loginForm";

const login = (props) => {

    return (
        <div className={style.login}>
            <LoginForm />
        </div>
    )

}

export default login