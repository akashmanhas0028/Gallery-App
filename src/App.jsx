import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15",
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "No User is available";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div>
          <div className="h-40 w-44 bg-white">
            <img
              className="h-[90%] object-cover rounded-xl"
              src={elem.download_url}
              alt=""
            />
          </div>
          <h2>{elem.author}</h2>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <button
        onClick={getData}
        className="bg-green-600 px-5 py-2 rounded active:scale-95 text-white m-2"
      >
        Get Data
      </button>
      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
