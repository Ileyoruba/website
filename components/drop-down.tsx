import { RiArrowDownSLine } from "react-icons/ri";
export default function DropDown({ name, className, onClick=() => {} }) {
  return (
    <div className="flex justify-between px-5 py-4 border rounded-lg cursor-pointer md:flex md:w-1/2 " onClick={onClick}>
      {name}
      <RiArrowDownSLine className={className} />
    </div>
  )
}
