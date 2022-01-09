/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import React from 'react'
import DropDown from '../../components/drop-down'
import { articles } from '../../contents/articles'

export default function Iwe() {
  const [showMore, toggleShowMore] = useState(false)

  const [contents, setContent] = useState(null)

  return (
    <div className='py-4'>
      <div className="flex flex-col justify-between p-2 text-sm md:mt-10 md:flex-row">
        <div className='mt-5 md:mt-0 md:w-2/5'>
          {
            articles.map(article => <div key={article.title}>
              <div className='pb-2 cursor-pointer hover:font-semibold' onClick={()=> setContent({
                content: article.list || article.content(), 
                // itọkasi: article.references, 
                references: article.references, 
                audio: article.audio, 
                submitted: article.submitted,
                narrated: article.narrated
              })
              }>{article.title}</div>
            </div>)
          }
        </div>

        <div className='md:w-4/5 h-[400px] mb-1 md:h-[650px] overflow-y-auto mt-5 md:mt-0 border-t md:border-none pt-3 md:pt-0 md:ml-4'>
        {
          Array.isArray(contents?.content) ? <ul className='space-y-2'> 
          {
            contents?.content.map((content: string, idx: number) => 
            <li key={content}>
              <span>{++idx}. </span>
              {content}
            </li>) 
          } </ul> : <div className='space-y-2 text-justify'>{contents?.content}</div> 
        }
        </div>
      </div>
      {
        contents && <div className='text-sm'>
          <div className='flex justify-center'>
            <audio controls className=''>
              <source src={contents?.audio} />
            </audio>
          </div>
          <div className='mt-3'>
            <p>Submitted: <span className="font-bold">{contents.submitted}</span></p>
            <p>Narrated: <span className="font-bold">{contents.narrated}</span></p>
          </div>
          <div className=''>
            <p>References:</p>
            {
              contents.references.map(ref => <p key={ref} className='mr-1'>
                <a className='font-bold text-blue-500' 
                  rel="noreferrer" 
                  target="_blank"
                  href={ref}>
                    {ref}
                  </a>
                </p>)
            }
          </div>
        
        </div>
      }
    </div>
  )
}
