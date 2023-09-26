function Validate(obj) {
    return Object.values(obj).every(input => input !== "");
}

export default {
    Validate
}
  