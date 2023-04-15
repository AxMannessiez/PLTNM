export default function displayNames(array) {
  return new Intl.ListFormat('en', { style: 'short' }).format(array);
}
