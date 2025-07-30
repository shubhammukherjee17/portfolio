import React from "react"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

import { cn } from "@/lib/utils"

interface WrapButtonProps {
  className?: string
  children: React.ReactNode
  href?: string
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link href={href}>
          <div
            className={cn(
              "group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-1.5 sm:gap-2 h-[56px] sm:h-[64px] flex items-center p-[8px] sm:p-[11px] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl",
              className
            )}
          >
            <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[36px] sm:h-[43px] min-w-fit px-3 sm:px-4 rounded-full flex items-center justify-center text-white shadow-md">
              <p className="font-medium tracking-tight flex items-center gap-1.5 sm:gap-2 justify-center whitespace-nowrap text-xs sm:text-sm">
                {children}
              </p>
            </div>
            <div className="text-[#3b3a3a] group-hover:ml-1 sm:group-hover:ml-2 group-hover:text-[#ff3f17] ease-in-out transition-all duration-300 size-[20px] sm:size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
              <ArrowRight
                size={14}
                className="sm:size-[18px] group-hover:rotate-45 ease-in-out transition-all duration-300"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-1.5 sm:gap-2 h-[56px] sm:h-[64px] flex items-center p-[8px] sm:p-[11px] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl",
            className
          )}
        >
          <div className="border border-[#3B3A3A] bg-[#fe7500] h-[36px] sm:h-[43px] min-w-fit px-3 sm:px-4 rounded-full flex items-center justify-center text-white shadow-md">
            <Globe className="mr-1.5 sm:mr-2 animate-spin" size={14} />
            <p className="font-medium tracking-tight whitespace-nowrap text-xs sm:text-sm">
              {children ? children : "Get Started"}
            </p>
          </div>
          <div className="text-[#3b3a3a] group-hover:ml-1 sm:group-hover:ml-2 group-hover:text-[#fe7500] ease-in-out transition-all duration-300 size-[20px] sm:size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
            <ArrowRight
              size={14}
              className="sm:size-[18px] group-hover:rotate-45 ease-in-out transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WrapButton
