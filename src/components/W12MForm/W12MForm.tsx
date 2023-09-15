import { useState } from "react";
import W12MHeader from "../W12MHeader/W12MHeader";
import TextInput from "../text_input/TextInput";
import SelectInput from "../select_input/SelectInput";
import TextAreaInput from "../text_area_input/TextAreaInput";
import SubmitButton from "../submit_button/SubmitButton";
import ErrorMessage from "../error_message/ErrorMessage";
import {
	checkSpecieNameField,
	checkPlanetNameField,
	checkNumberOfBeingField
} from "../text_input/textInputChecker"

export interface FormFields {
	specieName: string;
	planetName: string;
	numberOfBeings: string;
	question: string | null;
	textArea: string | null;
	isButtonDisabled: boolean
	errorMessage: string
}

const formFields: FormFields = {
	specieName: "humans",
	planetName: "Earth",
	numberOfBeings: "1000000000",
	question: "",
	textArea: "",
	isButtonDisabled: true,
	errorMessage: ""
};

const labelNames = {
	specieLabel: "Specie Name:",
	planetLabel: "Planet Name:",
	beingsQtyLabel: "Number of beings:",
	questionLabel: "What is 2 + 2 ?:",
	sparingReasonLabel: "Reason for sparing:"
}
const { specieLabel, planetLabel, beingsQtyLabel, questionLabel, sparingReasonLabel } = labelNames

const W12MForm = () => {
	const [formState, setFormState] = useState(formFields);
	const { specieName, planetName, numberOfBeings, isButtonDisabled, errorMessage } = formState;

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log(formState);
	};

	const handleSpecieName = (value: string) => {
		setFormState(checkSpecieNameField(value, formState))
	}

	const handlePlanetName = (value: string) => {
		setFormState(checkPlanetNameField(value, formState))
	}

	const handleNumberOfBeingField = (value: string) => {
		setFormState(checkNumberOfBeingField(value, formState))
	}

	return (
		<section className="w12MForm">
			<W12MHeader />
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<TextInput
					label={specieLabel}
					value={specieName}
					onChangeInput={(value) => handleSpecieName(value)}
				/>
				<TextInput
					label={planetLabel}
					value={planetName}
					onChangeInput={(value) => handlePlanetName(value)}
				/>
				<TextInput
					label={beingsQtyLabel}
					value={numberOfBeings}
					onChangeInput={(value) => handleNumberOfBeingField(value)}
				/>
				<SelectInput
					label={questionLabel}
					onChangeInput={(value) =>
						setFormState({ ...formState, question: value })
					}
				/>
				<TextAreaInput
					label={sparingReasonLabel}
					onChangeInput={(value) =>
						setFormState({ ...formState, textArea: value })
					}
				/>
				<SubmitButton isDisable={isButtonDisabled} />
				<ErrorMessage message={errorMessage} />
			</form>
		</section>
	);
};

export default W12MForm;
