import style from './sideBar.module.css'

const sideBar = () => {
    return (
    <nav className={style.sideBar}>
         <div className={style.bars}>
           <a href='/inform'>My Profile</a>
         </div>
         <div className={style.bars}>
           <a href='/dialogues'>Messages</a>
          </div>
         <div className={style.bars}>
           <a>News</a>
           </div>
         <div className={style.bars}>
           <a>Music</a>
           </div>
         <div className={style.bars}>
           <a>Settings</a>
           </div>
     </nav>
     )
}
export default sideBar