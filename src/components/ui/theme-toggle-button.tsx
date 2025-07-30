"use client"

import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations"

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant
  start?: AnimationStart
  showLabel?: boolean
  url?: string
}

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme()

  const styleId = "theme-transition-styles"

  const updateStyles = React.useCallback((css: string) => {
    if (typeof window === "undefined") return

    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = css
  }, [])

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url)

    updateStyles(animation.css)

    if (typeof window === "undefined") return

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    // Add a small delay to ensure styles are applied
    requestAnimationFrame(() => {
      document.startViewTransition(switchTheme)
    })
  }, [theme, setTheme, variant, start, url, updateStyles])

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-9 p-0 h-9 relative group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ease-out will-change-transform"
      name="Theme Toggle Button"
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-out dark:-rotate-90 dark:scale-0 text-amber-500 will-change-transform" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all duration-500 ease-out dark:rotate-0 dark:scale-100 text-blue-400 will-change-transform" />
      <span className="sr-only">Theme Toggle </span>
      {showLabel && (
        <>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -top-10 bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-300">
            {" "}
            variant = {variant}
          </span>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10 bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-300">
            {" "}
            start = {start}
          </span>
        </>
      )}
    </Button>
  )
}
