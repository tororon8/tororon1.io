import React from 'react';
import { Play } from 'lucide-react';

const NewUser = () => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
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

export default NewUser;