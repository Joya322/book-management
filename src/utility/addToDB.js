import { toast } from "react-toastify";

const getStoredList = (existingList) => {
  const storedListString = localStorage.getItem(existingList);
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredList = (id, existingList) => {
  const storedList = getStoredList(existingList);
  if (storedList.includes(id)) {
    toast.warn("Already added", {
      position: "top-center",
    });
    
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem(existingList, storedListString);
    toast.success(`Book added to ${existingList}`, {
      position: "top-right",
    });
  }
};

export { addToStoredList, getStoredList };
