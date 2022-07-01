import style from "./login.module.css"

const login = () => {
    return(
        <div className={style.login}>
            <div>Email</div>
            <input placeholder='Enter your email'/>
            <div>Password</div>
            <input placeholder='Enter your password'/>
            <div><button>Sing in</button></div>
            <div><button>Sing up</button></div>
        </div>
    )

}

export default login