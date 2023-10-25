import { useState, useEffect, useRef } from "react";

export const useOutsideClick = (initialIsVisible: boolean, callbackfunction?: () => void) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isComponentVisible) {
        setIsComponentVisible(false);
        if (!!callbackfunction) {
          callbackfunction()
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {ref, isVisible: isComponentVisible, setVisible: setIsComponentVisible};
}
