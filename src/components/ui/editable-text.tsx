
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  initialText: string;
  className?: string;
  onSave?: (text: string) => void;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function EditableText({ 
  initialText, 
  className, 
  onSave,
  as: Component = 'span',
  children 
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
      // Place cursor at the end
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(textRef.current);
      range.collapse(false);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onSave?.(text);
  };

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    setText(e.currentTarget.innerText);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
      onSave?.(text);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setText(initialText);
      setIsEditing(false);
    }
  };

  return (
    <Component
      ref={textRef}
      className={cn(
        'focus:outline-none whitespace-pre-wrap',
        isEditing && 'bg-gray-100/50 border-dotted border-b-2 border-gray-300',
        className
      )}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      {children || text}
    </Component>
  );
}
