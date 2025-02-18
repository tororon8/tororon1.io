import React from 'react';
import { Play } from 'lucide-react';

const ExperiencedUser = () => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">マーダーミステリーとは？</h2>
        <p className="mb-4">
          マーダーミステリーとは、物語の登場人物となって事件の真相を探る、会話型の推理ゲームです。
        </p>
        <div className="relative aspect-video bg-black rounded overflow-hidden cursor-pointer">
          <img
            src="https://img.youtube.com/vi/AqnISO7tyms/maxresdefault.jpg"
            alt="マーダーミステリー紹介動画"
            className="w-full h-full object-cover"
            onClick={() => window.open('https://www.youtube.com/watch?v=AqnISO7tyms', '_blank')}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity">
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">間取り図×スマホの調査とは？</h2>
        <p className="mb-4">
          本コンテンツは、大きな一枚の間取り図を囲んで調査する新感覚のマーダーミステリーになります。
        </p>
        <div className="relative aspect-video bg-gray-600 rounded overflow-hidden cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencedUser;