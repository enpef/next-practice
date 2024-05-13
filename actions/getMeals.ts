export const getMeals = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json();
}