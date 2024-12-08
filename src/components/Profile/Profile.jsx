import clsx from "clsx";
import style from "./Profile.module.css"
const Profile = ({name, tag, location, image, stats}) => {
    return <div className={clsx(style.ProfileBox )}>
        <div className={clsx(style.infoBox)}>
            <img className={clsx(style.imgAva)} src={image} alt="foto" width="150"/>
            <p className={clsx(style.name)}>{name}</p>
            <p className={clsx(style.tag)}>@{tag}</p>
            <p className={clsx(style.loc)}>{location}</p>
        </div>
        <ul className={clsx(style.statsList)}>
            <li className={clsx(style.statsItem)}>
                <span>Followers</span>
                <span className={clsx(style.stats2Span)}>{stats.followers}</span>
                
            </li>
            <li className={clsx(style.statsItem)}>
                <span>Views</span>
                <span className={clsx(style.stats2Span)}>{stats.views}</span>
                
            </li>
            <li className={clsx(style.statsItem)}>
                <span>Likes</span>
                <span className={clsx(style.stats2Span)}>{stats.likes}</span>
                
            </li>
        </ul>
    </div>
}

export default Profile;