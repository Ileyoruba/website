/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
export default function index() {
  return (
    <div className='pt-10 mx-auto mb-10 rounded-lg md:mt-10'>
      <p className='text-lg font-bold md:text-3xl'>Isori (Categories)</p>
      <div className='flex justify-center'>
        <div className="grid gap-4 mx-auto mt-5 md:grid-cols-3 large-screen:grid-cols-4">
            {
              categories.map(cat => 
                <Link key={cat.title} href={cat.link} passHref> 
                  <div className='relative transition ease-in border rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg'>
                    <img src={cat.image} alt={cat.title} className='w-full rounded-lg large-screen:h-auto'/>
                    <span className='absolute bottom-0 px-1 mb-8 ml-2 text-xs italic underline bg-white bg-opacity-50 rounded large-screen:mb-10'><a href={cat.source || cat.image} rel="noreferrer noopener">photo</a></span>
                    <div className='absolute bottom-0 w-full text-white bg-black bg-opacity-50 rounded-b-lg p2-5'>
                      <div className='flex justify-center'>
                        <div className='py-1 font-bold text-center large-screen:py-2'>{cat.title}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }    
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    title: 'Ìwé (Articles)',
    link: '/isori/iwe',
    source: 'https://innovation-village.com/learning-the-yoruba-language-made-easy-with-yoruba101-aided-by-oluko-asa-cultural-tutor/',
    image: 'https://4.bp.blogspot.com/-cmgYn5hbjKI/UZXWM1yZloI/AAAAAAAABk0/5ipWF6TqKbI/s1600/ss1.png',
  },
  {
    title: 'Fidio (Videos)',
    link: '/isori/fidio',
    source: 'https://www.clare.fm/news/nigerian-community-celebrate-end-yoruba-culture-week/',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clare.fm%2Fwp-content%2Fuploads%2Fsites%2F17%2FYoruba-Culture-Week-696x385.jpg'
  },
  {
    title: 'Afetigbọ (Audios)',
    link: '/afetigbo',
    source: '',
    image: 'https://newsday.co.tt/wp-content/uploads/2019/06/4197800-1024x907.jpg'
  }, 
]
