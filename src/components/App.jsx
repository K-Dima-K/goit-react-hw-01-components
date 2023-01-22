import user from "../data/user.json"
import datastats from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics/Statistics";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
       backgroundColor: '#a9dce8',
        color: '#010101',
        padding: 15
      }}
    >
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={datastats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />

    </div>
  );
};
