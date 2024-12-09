import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./friends.json"

const App = () => {
    return <>
        <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats} 
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
            
    </>
};

export default App;