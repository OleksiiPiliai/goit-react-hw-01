import Profile from "./components/Profile/Profile"
import userData from "./userData.json"
import FriendListItem from "./components/FriendList/FriendList";
import friends from "./friends.json"
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
    return <>
        <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats} 
        />
        <ul className="friend-list">
            {friends.map((friend) => (
                <li className="friend-item" key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
               </li>
           ))} 
        </ul>
        <table className="table-bank">
          <thead className="thead-bank">
            <tr>
              <th className="th-bank">Type</th>
              <th className="th-bank">Amount</th>
              <th className="th-bank">Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              />
              ))}
          </tbody>
        </table>
    </>
};

export default App;