import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(function () {
    const getWatched = localStorage.getItem(key);
    return getWatched ? JSON.parse(getWatched) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
};
