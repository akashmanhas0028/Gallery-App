import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black h-screen p-4 text-white flex flex-col relative">
      
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <h1 className="text-xl font-semibold animate-pulse">
            Loading...
          </h1>
        </div>
      )}

      {/* 🔹 Gallery */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-6xl">
          {userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))}
        </div>
      </div>

      {/* 🔹 Pagination */}
      <div className="flex justify-center gap-6 items-center pt-4">
        <button
          disabled={loading || index === 1}
          className={`px-4 py-2 rounded-xl font-semibold text-sm transition ${
            index === 1 || loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-emerald-400 text-black active:scale-95"
          }`}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          Prev
        </button>

        <h3 className="text-lg font-semibold">Page - {index}</h3>

        <button
          disabled={loading}
          className={`px-4 py-2 rounded-xl font-semibold text-sm transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-emerald-400 text-black active:scale-95"
          }`}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;