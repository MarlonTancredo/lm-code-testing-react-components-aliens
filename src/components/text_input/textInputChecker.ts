import { FormFields } from "../W12MForm/W12MForm";

const specialCharList = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export const checkSpecieNameField = (value: string, formState: FormFields) => {
  if (value.length < 3) {
    return {
      ...formState,
      specieName: value,
      isButtonDisabled: true,
      errorMessage: "You must enter more than 2 characters!",
    };
  }
  if (value.length > 23) {
    return {
      ...formState,
      specieName: value,
      isButtonDisabled: true,
      errorMessage: "You must enter less than 23 characters!",
    };
  }
  if (specialCharList.test(value)) {
    return {
      ...formState,
      specieName: value,
      isButtonDisabled: true,
      errorMessage: "Your answer must not enter special characters!",
    };
  }
  const values = value.split("").map((element) => {
    return !isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return {
      ...formState,
      specieName: value,
      isButtonDisabled: true,
      errorMessage: "Your answer must not enter numbers!",
    };
  }
  return {
    ...formState,
    specieName: value,
    isButtonDisabled: false,
    errorMessage: "",
  };
};

export const checkPlanetNameField = (value: string, formState: FormFields) => {
  if (value.length < 2) {
    return {
      ...formState,
      planetName: value,
      isButtonDisabled: true,
      errorMessage: "You must enter more than 1 characters!",
    };
  }
  if (value.length > 49) {
    return {
      ...formState,
      planetName: value,
      isButtonDisabled: true,
      errorMessage: "You must enter less than 49 characters!",
    };
  }
  if (specialCharList.test(value)) {
    return {
      ...formState,
      planetName: value,
      isButtonDisabled: true,
      errorMessage: "Your answer must not enter special characters!",
    };
  }
  return {
    ...formState,
    planetName: value,
    isButtonDisabled: false,
    errorMessage: "",
  };
};

export const checkNumberOfBeingField = (
  value: string,
  formState: FormFields
) => {
  const values = value.split("").map((element) => {
    return isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return {
      ...formState,
      numberOfBeings: value,
      isButtonDisabled: true,
      errorMessage: "You must enter only numbers",
    };
  }
  if (parseInt(value) < 1000000000) {
    return {
      ...formState,
      numberOfBeings: value,
      isButtonDisabled: true,
      errorMessage: "Your number must be bigger than 1.000.000.000",
    };
  }
  return {
    ...formState,
    numberOfBeings: value,
    isButtonDisabled: false,
    errorMessage: "",
  };
};
