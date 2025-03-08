
"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import {
  AnimatePresence,
  motion,
  type Transition,
} from "framer-motion"

import { cn } from "@/lib/utils"

interface TextRotateProps {
  texts: string[]
  rotationInterval?: number
  initial?: any
  animate?: any
  exit?: any
  animatePresenceMode?: "sync" | "wait" | "popLayout"
  animatePresenceInitial?: boolean
  transition?: Transition
  loop?: boolean
  auto?: boolean
  mainClassName?: string
  elementClassName?: string
  onNext?: (index: number) => void
}

export interface TextRotateRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      loop = true,
      auto = true,
      mainClassName,
      elementClassName,
      onNext,
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    // Helper function to handle index changes and trigger callback
    const handleIndexChange = useCallback((newIndex: number) => {
      setCurrentTextIndex(newIndex)
      onNext?.(newIndex)
    }, [onNext])

    const next = useCallback(() => {
      const nextIndex = currentTextIndex === texts.length - 1
        ? (loop ? 0 : currentTextIndex)
        : currentTextIndex + 1
      
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const previous = useCallback(() => {
      const prevIndex = currentTextIndex === 0
        ? (loop ? texts.length - 1 : currentTextIndex)
        : currentTextIndex - 1
      
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const jumpTo = useCallback((index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1))
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex)
      }
    }, [texts.length, currentTextIndex, handleIndexChange])

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0)
      }
    }, [currentTextIndex, handleIndexChange])

    // Expose all navigation functions via ref
    useImperativeHandle(ref, () => ({
      next,
      previous,
      jumpTo,
      reset,
    }), [next, previous, jumpTo, reset])

    useEffect(() => {
      if (!auto) return
      const intervalId = setInterval(next, rotationInterval)
      return () => clearInterval(intervalId)
    }, [next, rotationInterval, auto])

    return (
      <motion.span
        className={cn("flex whitespace-pre-wrap", mainClassName)}
        layout
        transition={transition}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>

        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className="flex w-full"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            <span className={cn("inline-block", elementClassName)}>
              {texts[currentTextIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.span>
    )
  }
)

TextRotate.displayName = "TextRotate"

export { TextRotate }
