import React, { useState, useEffect } from 'react';

export default function nodeRef(ref) {
  const [onScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));

  useEffect(() => {
    observer.observe(ref.current);
    return () => { observer.disconnect() };
  }, []);

  return onScreen;
}