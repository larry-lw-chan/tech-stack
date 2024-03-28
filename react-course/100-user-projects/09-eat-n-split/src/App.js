import React from "react";

import SideBar from "./component/SideBar";
import SplitBillForm from "./component/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = React.useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = React.useState(null);

  return (
    <div className="app">
      <SideBar
        friends={friends}
        setFriends={setFriends}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <SplitBillForm
        friends={friends}
        setFriends={setFriends}
        selectedFriend={selectedFriend}
        key={selectedFriend.id}
      />
    </div>
  );
}

export default App;
