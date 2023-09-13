const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export const checkSpecieNameField = (value: string) => {
  if (value.length < 3) {
    return "You must enter more than 2 characters!";
  }
  if (value.length > 23) {
    return "You must enter less than 23 characters!";
  }
  const values = value.split("").map((element) => {
    return !isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return "Your answer must not have numbers!";
  }
  if (specialChars.test(value)) {
    return "Your answer must not have special characters!";
  }
};

export const checkPlanetNameField = (value: string) => {
  if (value.length < 2) {
    return "You must enter more than 1 characters!";
  }
  if (value.length > 49) {
    return "You must enter less than 49 characters!";
  }
  if (specialChars.test(value)) {
    return "Your answer must not have special characters!";
  }
};

export const checkNumberOfBeingField = (value: string) => {
  const values = value.split("").map((element) => {
    return isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return "You only can use numbers";
  }
  if (parseInt(value) < 1000000000) {
    return "Must be at least 1,000,000,000.";
  }
};
