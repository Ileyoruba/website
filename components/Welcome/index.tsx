import Particle from "../Particle";


const alphabets = ['A a', 'B b', 'D d', 'E e', 'Ẹ ẹ', 'F f', 'G g', 'Gb gb', 'H h', 'I i', 'J j', 'K k', 'L l', 'M m', 'N n', 'O o', 'Ọ ọ', 'P p', 'R r', 'S s', 'Ṣ ṣ', 'T t', 'U u', 'W w', 'Y y']
export default function index() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {
        alphabets.map(alphabet => <p key={alphabet} className="border px-1 border-red-400 text-xs rounded-lg sm:px-3 py-2 md:px-6 md:py-10 md:text-3xl text-center font-semibold">{alphabet}</p>)
      }
    </div>
  )
}
