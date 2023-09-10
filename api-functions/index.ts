export const getCategoryList = async () => {
  try {
    const resp = await fetch("http://localhost:3000/api/category");
    const data = resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
