/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { ReactYouTubeLite } from 'react-youtube-lite';

export default function Kids() {
  const [watching, setWatching] = useState(videos[0])
  
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-center space-x-1 md:space-x-5">
        {
          categories.map(cat => <div key={cat} className="w-[100px] h-[50px] border flex items-center justify-center font-bold bg-slate-50">
            {cat}
          </div>)
        }
      </div>
      <div className="flex justify-center px-10 mt-10 space-x-5 overflow-x-auto align-middle md:space-x-10">
        {
          videos.map(vid => <img onClick={() => setWatching(vid)} key={vid.name} style={{ opacity: 0.9 }} src={vid.photo} alt={vid.photo} className="w-48 cursor-pointer rounded-xl"/>)
        }
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full h-auto border md:w-3/4">
          <ReactYouTubeLite url={watching.video} />
        </div>
      </div>
      <div className='flex justify-center mt-4 mb-20 text-sm'>
        <p className='break-all'>YouTube: <a href={watching.channel} target="_blank" rel="noreferrer" className='font-bold text-blue-500'>{watching.channel}</a></p>
      </div>
    </div>
  )
}


const categories = [
  'article', 'video', 'audio'
]

const videos = [
  {
    name: 'lime-tree',
    photo: '/lime-tree.png',
    video: 'https://www.youtube.com/watch?v=IAkZMwSDTTM&ab_channel=SCENEONETV',
    channel: 'https://www.youtube.com/channel/UCLLA3OKhzK-tzXFvXhnGKZQ',
  },
  {
    name: 'Ojo',
    photo: '/ojo n ro.png',
    video: 'https://www.youtube.com/watch?v=uoa_r22v4AY&ab_channel=YorubaforKidz',
    channel: 'https://www.youtube.com/channel/UCJhbeEd2Ubv6FNd99fD0gfg',
  },
]