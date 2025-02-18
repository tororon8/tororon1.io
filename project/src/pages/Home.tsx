import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-xl text-center">
        あなたはマダミスをやったことがありますか？
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/experienced')}
          className="px-6 py-3 bg-yellow-400 text-black border-2 border-black rounded hover:bg-yellow-500 transition-colors"
        >
          はい
        </button>
        <button
          onClick={() => navigate('/new')}
          className="px-6 py-3 bg-black text-yellow-400 border-2 border-yellow-400 rounded hover:bg-gray-900 transition-colors"
        >
          いいえ
        </button>
      </div>
    </div>
  );
};

export default Home;