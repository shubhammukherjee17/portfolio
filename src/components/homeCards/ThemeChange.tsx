"use client";
import React from "react"

import ThemeToggleButton from "../ui/theme-toggle-button"

const ThemeToggleAnimationsDemo = () => {
  return (
    <div className="h-full w-full flex items-center justify-center gap-8 px-4 py-8">
      <div className="transform hover:scale-110 transition-transform duration-300 ease-out">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        />
      </div>
      <div className="transform hover:scale-110 transition-transform duration-300 ease-out">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        />
      </div>
      <div className="transform hover:scale-110 transition-transform duration-300 ease-out">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JwcXdzcHd5MW92NWprZXVpcTBtNXM5cG9obWh0N7I4NzFpaDE3byZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/WgsVx6C4N8tjy/giphy.gif"
        />
      </div>
      <div className="transform hover:scale-110 transition-transform duration-300 ease-out">
        <ThemeToggleButton variant="circle" start="center" />
      </div>
    </div>
  )
}

export default ThemeToggleAnimationsDemo
