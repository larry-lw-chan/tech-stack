import React from "react";

export default function SideBar({
  friends,
  setFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  return (
    <ul className="sidebar">
      <FriendList
        friends={friends}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <AddFriend friends={friends} setFriends={setFriends} />
    </ul>
  );
}

function AddFriend({ friends, setFriends }) {
  const [showForm, setShowForm] = React.useState(false);
  const [friendName, setFriendName] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");

  function handleAddFriend(e) {
    e.preventDefault();
    if (friendName === "" || imageURL === "") return;

    const newFriend = {
      id: Math.floor(Math.random() * 1000000),
      name: friendName,
      image: imageURL,
      balance: 0,
    };
    const newFriends = [...friends, newFriend];
    setFriends(newFriends);
    setShowForm(false);
  }

  if (!showForm) {
    return (
      <button className="button" onClick={() => setShowForm(!showForm)}>
        Add a friend
      </button>
    );
  } else {
    return (
      <form className="form-add-friend">
        <label htmlFor="bill">👭Friend Name</label>
        <input
          type="text"
          id="friend_name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />

        <label htmlFor="imageURL">🌠Image URL</label>
        <input
          type="text"
          id="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <button className="button" onClick={(e) => handleAddFriend(e)}>
          Add
        </button>
      </form>
    );
  }
}

function FriendList({ friends, selectedFriend, setSelectedFriend }) {
  return (
    <>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        );
      })}
    </>
  );
}

function Friend({ friend, selectedFriend, setSelectedFriend }) {
  return (
    <li className="friend">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <DisplayBalance name={friend.name} balance={friend.balance} />
      <SelectButton
        friend={friend}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    </li>
  );
}

function SelectButton({ friend, selectedFriend, setSelectedFriend }) {
  let text = friend.id === selectedFriend?.id ? "Close" : "Select";

  function handleClick() {
    if (friend.id === selectedFriend?.id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
  }

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function DisplayBalance({ name, balance }) {
  if (balance < 0) {
    return (
      <p className="red">
        You owe {name} ${Math.abs(balance).toFixed(2)}
      </p>
    );
  } else if (balance > 0) {
    return (
      <p className="green">
        {name} owes you ${balance.toFixed(2)}
      </p>
    );
  } else {
    return <p>You and {name} are even</p>;
  }
}
