export default function validateFormRequired(value, errorMessage) {
  let error;
  if (!value) {
    error = errorMessage;
  }
  return error;
}
