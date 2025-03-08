
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
  as = 'span',
  children 
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  // Use a more specific type for the ref to avoid complex union type issues
  const textRef = useRef<HTMLSpanElement>(null);
  const Component = as as 'span'; // Simplify the component type

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

  // Use a specific React.FormEventHandler type with a generic element type
  const handleInput = (e: React.FormEvent<Element>) => {
    // Safely cast to HTMLElement since we know it's editable content
    const element = e.currentTarget as HTMLElement;
    setText(element.innerText);
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

  // Use React.createElement to avoid TypeScript issues with dynamic element types
  return React.createElement(
    Component,
    {
      ref: textRef,
      className: cn(
        'focus:outline-none whitespace-pre-wrap',
        isEditing && 'bg-gray-100/50 border-dotted border-b-2 border-gray-300',
        className
      ),
      contentEditable: isEditing,
      suppressContentEditableWarning: true,
      onDoubleClick: handleDoubleClick,
      onBlur: handleBlur,
      onInput: handleInput,
      onKeyDown: handleKeyDown,
    },
    children || text
  );
}
