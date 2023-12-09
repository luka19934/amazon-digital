import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(generateInitialValueForState);

  function generateInitialValueForState() {
    const itemValue = localStorage.getItem(key);
    if (itemValue) return JSON.parse(itemValue);
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  }

  useEffect(() => {
    function handleStorageChange(e) {
      if (e.key === key) {
        setData(JSON.parse(e.newValue));
      }
    }

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  function updateStorage(newValue) {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(
      new StorageEvent("storage", { key, newValue: JSON.stringify(newValue) })
    );
  }

  return [data, updateStorage];
};

export default useLocalStorage;
