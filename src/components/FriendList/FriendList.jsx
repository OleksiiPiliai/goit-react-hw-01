import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return <ul className={clsx(style.friendList) }>
            {friends.map((friend) => (
                <li className={clsx(style.friendItem)} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
               </li>
           ))} 
        </ul>
}

export default FriendList;