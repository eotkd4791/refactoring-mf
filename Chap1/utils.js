async function fetchData(filePath) {
  try {
    const response = await fetch(filePath);
    const json = await response.json();
    console.log(json)
    return json;
  } catch (error) {
    console.error(error);
  }
}

export { fetchData };