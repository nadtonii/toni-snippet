
"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  defaultValue: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  onSave?: (value: string) => void;
}

export const EditableText = ({
  defaultValue,
  className,
  as = "p",
  onSave,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const Element = as;

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Place cursor at the end of text
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      if (onSave) {
        onSave(value);
      }
    }
    if (e.key === "Escape") {
      setIsEditing(false);
      setValue(defaultValue); // Reset to original value
    }
  };

  if (isEditing) {
    return (
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full resize-none overflow-hidden bg-transparent outline-none ring-0 focus:ring-2 focus:ring-primary/20 rounded p-1",
          className
        )}
        style={{ minHeight: "1.5em" }}
        rows={value.split("\n").length}
      />
    );
  }

  return (
    <Element
      className={cn("cursor-pointer hover:bg-primary/5 p-1 rounded", className)}
      onClick={handleClick}
    >
      {value}
    </Element>
  );
};
