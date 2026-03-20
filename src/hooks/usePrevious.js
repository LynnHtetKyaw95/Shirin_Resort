import { useState, useEffect } from "react";

export function usePrevious(value) {
  const [prev, setPrev] = useState();
  useEffect(() => {
    setPrev(value);
  }, [value]);
  return prev;
}
