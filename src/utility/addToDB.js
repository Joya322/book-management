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
    alert("Already added");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem(existingList, storedListString);
  }
};

export { addToStoredList, getStoredList };
