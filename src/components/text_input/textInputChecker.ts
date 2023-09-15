const specialCharList = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export const checkSpecieNameField = (value: string): void => {
  const values = value.split("").map((element) => {
    return !isNaN(parseInt(element));
  });
  if (value.length < 3) {
    throw new Error("You must enter more than 2 characters!");
  }
  if (value.length > 23) {
    throw new Error("You must enter less than 23 characters!");
  }
  if (specialCharList.test(value)) {
    throw new Error("Your answer must not enter special characters!");
  }
  if (values.includes(true)) {
    throw new Error("Your answer must not enter numbers!");
  }
};

export const checkPlanetNameField = (value: string) => {
  if (value.length < 2) {
    throw new Error("You must enter more than 1 characters!");
  }
  if (value.length > 49) {
    throw new Error("You must enter less than 49 characters!");
  }
  if (specialCharList.test(value)) {
    throw new Error("Your answer must not enter special characters!");
  }
};

export const checkNumberOfBeingField = (value: string) => {
  const values = value.split("").map((element) => {
    return isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    throw new Error("You must enter only numbers");
  }
  if (parseInt(value) < 1000000000) {
    throw new Error("Your number must be bigger than 1.000.000.000");
  }
};
