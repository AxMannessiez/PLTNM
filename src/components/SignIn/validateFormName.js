function validateFormName(value) {
    let error;
    if (!value) {
        error = 'Name is required';
    }
    return error;
}

export {validateFormName};