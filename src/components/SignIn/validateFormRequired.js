export default function validateFormRequired(value, variableName) {
  let error;
  if (!value) {
    error = `${variableName} is required`;
  }
  return error;
}
