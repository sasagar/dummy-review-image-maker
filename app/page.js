'use client';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import Rating from './_component/rating';

const Home = () => {
  const [user, setUser] = useState("名無し");
  const [title, setTitle] = useState("");
  const [stars, setStars] = useState(1);
  const [store, setStore] = useState("");
  const [review, setReview] = useState("");

  const gen = () => {
    if (typeof window !== 'undefined') {
      const node = document.querySelector('#source');

      node.querySelector('#icon').style.marginTop = '10px';
      node.querySelector('#username').style.marginTop = '-5px';

      html2canvas(node).then((canvas) => {
        if (document.querySelector('#image').hasChildNodes()) {
          const children = document.querySelector('#image').childNodes;

          children.forEach(child => { child.remove() });
        }
        document.querySelector('#image').appendChild(canvas);
      });
      node.querySelector('#icon').style.marginTop = '0';
      node.querySelector('#username').style.marginTop = '0';
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <h1 className="text-3xl font-bold mb-6">ダミーのレビュー画像作る君</h1>
      <div className="flex gap-8">
        {/* 入力欄 */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <label htmlFor="user">名前</label>
            <input type="text" name="user" id="user" placeholder="レビュー者名" className="text-black p-1 rounded-sm" value={user} onChange={(e) => setUser(e.target.value)} />
          </div>

          <div className="flex gap-6 items-center">
            <label htmlFor="stars">★の数</label>
            <input type="number" name="stars" step="0.5" id="stars" placeholder="4.5" className="text-black p-1 rounded-sm w-16" value={stars} onChange={(e) => setStars(e.target.value)} />
          </div>

          <div className="flex gap-6 items-center">
            <label htmlFor="store">購入場所</label>
            <input type="text" name="store" id="store" placeholder="空欄で省略" className="text-black p-1 rounded-sm" value={store} onChange={(e) => setStore(e.target.value)} />
          </div>

          <div className="flex gap-6 items-center">
            <label htmlFor="title">タイトル</label>
            <input type="text" name="title" id="title" placeholder="レビュータイトル" className="text-black p-1 rounded-sm" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="review">レビュー本文</label>
            <textarea name="review" id="review" placeholder="レビュー本文" className="text-black p-1 rounded-sm" value={review} rows={8} onChange={(e) => setReview(e.target.value)} />
          </div>
        </div>

        {/* 生成エリア */}
        <div className='flex flex-col gap-6'>
          <div className="text-black bg-white rounded p-4 overflow-hidden w-[384px]" id="source">
            <div className='flex gap-3 items-center'>
              <img src="./usericon.png" alt="usericon"
                // className='h-8 w-8 leading-4'
                width="32" height="32"
                id="icon"
              />
              <h3 className='text-base leading-4' id="username">{user}</h3>
            </div>
            <div className='flex gap-4 items-center'>
              <Rating star={stars} size="18" />
              <p className="text-amber-700 text-xs font-bold">
                {store ? `${store}で購入` : ''}
              </p>
            </div>
            <h4 className='text-[15px] font-bold'>{title}</h4>
            <p className='text-[15px] whitespace-pre-wrap border-spacing-0 pb-4'>{review}</p>
          </div>
          <div>
            <button type="button" className='rounded bg-lime-700 text-white px-4 py-2' onClick={gen}>画像生成する！</button>
          </div>
          <div id="image" />
        </div>
      </div>
    </main>
  );
}

export default Home;