import clsx from "clsx";
import style from "./friendList.module.css"
const FriendListItem = ({ avatar, name, isOnline }) => {
    return <>
        <img className={clsx(style.imgFr)} src={avatar} alt="Avatar"  width="64"/>
        <p className={clsx(style.nameFr)}>
            {name}
        </p>
        <p className={clsx(style.status, isOnline ? style.green : style.red)}>
            {isOnline ? "Online" : "Offline"}
        </p>
    </>
}

export default FriendListItem;