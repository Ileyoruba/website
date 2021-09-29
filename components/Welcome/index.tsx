const alphabets = ['A a', 'B b', 'D d', 'E e', 'Ẹ ẹ', 'F f', 'G g', 'Gb gb', 'H h', 'I i', 'J j', 'K k', 'L l', 'M m', 'N n', 'O o', 'Ọ ọ', 'P p', 'R r', 'S s', 'Ṣ ṣ', 'T t', 'U u', 'W w', 'Y y']

export default function index() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {
        alphabets.map(alphabet => <p key={alphabet} className="px-1 py-2 text-xs font-semibold text-center border border-red-400 rounded-lg sm:px-3 md:px-6 md:py-10 md:text-3xl">{alphabet}</p>)
      }
    </div>
  )
}
