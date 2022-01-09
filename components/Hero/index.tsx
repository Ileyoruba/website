/* eslint-disable @next/next/no-img-element */
export default function index() {
  return (
    <div className="mx-auto mt-10 text-center md:mt-14">
      <div>
        <p className="text-3xl font-bold md:tracking-wider md:text-4xl">Àṣà, Èdè, Ìtàn àti gbogbo nkan ilé Yorùbá</p>
      </div>
      <p className="mx-auto mt-5 text-xs md:text-sm">A compedium of Yoruba History, stories, cultural background and every other rich contents about the Yoruba culture</p>
      <div className="flex items-center justify-center my-5 space-x-3 large-screen:my-10">
        {
          heroImage.map(image => <div key={image.img}>
            <img src={image.img} className='w-full h-full' alt={image.img} />
          </div>)
        }
      </div>
    </div>
  )
}


const heroImage = [
  {
    img: '/chalked.svg'
  },
  {
    img: '/drummers.svg'
  },
  {
    img: '/madam.svg'
  }
]