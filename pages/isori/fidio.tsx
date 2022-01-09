/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import React from 'react'
import DropDown from '../../components/drop-down'

export default function Fidio() {
  const [showMore, toggleShowMore] = useState(false)


  return (
    <div>
      {/* <DropDown className={`text-3xl normal-view ${showMore && 'show-more' }`} onClick={() => toggleShowMore(!showMore)} />
      <DropDown className=""/> */}
    </div>
  )
}
