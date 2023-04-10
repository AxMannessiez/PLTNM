export default function displayNames(array) {
  if (array.length > 1) {
    const lastItem = array.pop();
    return `${array.join(', ')} & ${lastItem}`;
  }
  if (array.length === 1) {
    return array[0];
  }
  return null;
}
