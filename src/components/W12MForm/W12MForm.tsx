import { useState } from "react";
import W12MHeader from "../W12MHeader/W12MHeader";
import TextInput from "../text_input/TextInput";
import SelectInput from "../select_input/SelectInput";
import TextAreaInput from "../text_area_input/TextAreaInput";
import SubmitButton from "../submit_button/SubmitButton";
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
	specieErrorMessage: unknown
	planetErrorMessage: unknown
	beingErrorMessage: unknown
}

const formFields: FormFields = {
	specieName: "humans",
	planetName: "Earth",
	numberOfBeings: "1000000000",
	question: "",
	textArea: "",
	isButtonDisabled: true,
	specieErrorMessage: "",
	planetErrorMessage: "",
	beingErrorMessage: ""
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
	const {
		specieName,
		planetName,
		numberOfBeings,
		isButtonDisabled,
		specieErrorMessage,
		planetErrorMessage,
		beingErrorMessage } = formState;

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log(formState);
	};

	const handleSpecieName = (value: string) => {
		try {
			checkSpecieNameField(value)
			setFormState({
				...formState,
				specieName: value,
				isButtonDisabled: false,
				specieErrorMessage: ""
			})
		} catch ({ message }: any) {
			setFormState({
				...formState,
				specieName: value,
				isButtonDisabled: true,
				specieErrorMessage: message
			})
		}
	}

	const handlePlanetName = (value: string) => {
		try {
			checkPlanetNameField(value)
			setFormState({
				...formState,
				planetName: value,
				isButtonDisabled: false,
				planetErrorMessage: ""
			})
		} catch ({ message }: any) {
			setFormState({
				...formState,
				planetName: value,
				isButtonDisabled: true,
				planetErrorMessage: message
			})
		}
	}

	const handleNumberOfBeingField = (value: string) => {
		try {
			checkNumberOfBeingField(value)
			setFormState({
				...formState,
				numberOfBeings: value,
				isButtonDisabled: true,
				beingErrorMessage: "",
			});
		} catch ({ message }: any) {
			setFormState({
				...formState,
				numberOfBeings: value,
				isButtonDisabled: true,
				beingErrorMessage: message,
			});
		}
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
					errorMessage={specieErrorMessage}
					onChangeInput={handleSpecieName}
				/>
				<TextInput
					label={planetLabel}
					value={planetName}
					errorMessage={planetErrorMessage}
					onChangeInput={handlePlanetName}
				/>
				<TextInput
					label={beingsQtyLabel}
					value={numberOfBeings}
					errorMessage={beingErrorMessage}
					onChangeInput={handleNumberOfBeingField}
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
			</form>
		</section>
	);
};

export default W12MForm;
