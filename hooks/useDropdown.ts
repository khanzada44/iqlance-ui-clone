import { useState, useRef, useEffect, useCallback } from 'react';

const DROPDOWN_DELAY = 200; // ✅ Increased for better UX

export const useDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef<boolean>(false);

  const handleMouseEnter = useCallback((label: string) => {
    console.log('useDropdown - Enter:', label); // Debug
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isHoveringRef.current = true;
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    console.log('useDropdown - Leave'); // Debug
    isHoveringRef.current = false;
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setActiveDropdown(null);
      }
    }, DROPDOWN_DELAY);
  }, []);

  const clearDropdownTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // ✅ FIXED: Manual setter with proper cleanup
  const setActive = useCallback((label: string | null) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return {
    activeDropdown,
    setActiveDropdown: setActive,
    handleMouseEnter,
    handleMouseLeave,
    clearDropdownTimeout,
  };
};