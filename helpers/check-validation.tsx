export const checkValidation = (name: string) => {
  if (name.length <= 5) {
    return true;
  }
  if (!name.includes('@')) {
    return true;
  }
};
