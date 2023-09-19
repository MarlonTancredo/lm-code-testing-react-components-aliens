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
}

interface ErrorMessages {
	specieErrorMessage: unknown,
	planetErrorMessage: unknown,
	beingErrorMessage: unknown
}

interface FieldStatus {
	specieFieldStatus: boolean;
	planetFieldStatus: boolean;
	numberOfBeingsStatus: boolean
}

const formFields: FormFields = {
	specieName: "humans",
	planetName: "Earth",
	numberOfBeings: "1000000000",
	question: "",
	textArea: "",
	isButtonDisabled: true,
};

const errorMessages: ErrorMessages = {
	specieErrorMessage: "",
	planetErrorMessage: "",
	beingErrorMessage: ""
}

const fieldStatus: FieldStatus = {
	specieFieldStatus: true,
	planetFieldStatus: true,
	numberOfBeingsStatus: true
}

export const labelNames = {
	specieLabel: "Specie Name:",
	planetLabel: "Planet Name:",
	beingsQtyLabel: "Number of beings:",
	questionLabel: "What is 2 + 2 ?:",
	sparingReasonLabel: "Reason for sparing:"
}
const { specieLabel, planetLabel, beingsQtyLabel, questionLabel, sparingReasonLabel } = labelNames

const W12MForm = () => {
	const [formState, setFormState] = useState(formFields);
	const [messages, setMessages] = useState(errorMessages)
	const [fieldStatusState, setFieldStatusState] = useState(fieldStatus)

	const { specieName, planetName, numberOfBeings } = formState;
	const { specieErrorMessage, planetErrorMessage, beingErrorMessage } = messages

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log(formState);
	};

	const handleIsButtonDisabled = () => {
		const values = Object.values(fieldStatusState).map((value) => value)
		const isFalseIncluded = values.includes(true)
		return isFalseIncluded
	}

	const handleSpecieName = (value: string) => {
		try {
			checkSpecieNameField(value)
			setFormState({
				...formState,
				specieName: value,
				isButtonDisabled: false
			})
			setMessages({ ...messages, specieErrorMessage: "" })
			setFieldStatusState({ ...fieldStatusState, specieFieldStatus: false, })
		} catch ({ message }: any) {
			setFormState({
				...formState,
				specieName: value,
				isButtonDisabled: true
			})
			setMessages({ ...messages, specieErrorMessage: message })
			setFieldStatusState({ ...fieldStatusState, specieFieldStatus: true })
		}
	}

	const handlePlanetName = (value: string) => {
		try {
			checkPlanetNameField(value)
			setFormState({
				...formState,
				planetName: value,
				isButtonDisabled: false
			})
			setMessages({ ...messages, planetErrorMessage: "" })
			setFieldStatusState({ ...fieldStatusState, planetFieldStatus: false })
		} catch ({ message }: any) {
			setFormState({
				...formState,
				planetName: value,
				isButtonDisabled: true
			})
			setMessages({ ...messages, planetErrorMessage: message })
			setFieldStatusState({ ...fieldStatusState, planetFieldStatus: true })
		}
	}

	const handleNumberOfBeingField = (value: string) => {
		try {
			checkNumberOfBeingField(value)
			setFormState({
				...formState,
				numberOfBeings: value,
				isButtonDisabled: false
			});
			setMessages({ ...messages, beingErrorMessage: "", })
			setFieldStatusState({ ...fieldStatusState, numberOfBeingsStatus: false })
		} catch ({ message }: any) {
			setFormState({
				...formState,
				numberOfBeings: value,
				isButtonDisabled: true
			});
			setMessages({ ...messages, beingErrorMessage: message, })
			setFieldStatusState({ ...fieldStatusState, numberOfBeingsStatus: true })
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
				<SubmitButton isDisable={handleIsButtonDisabled()} />
			</form>
		</section>
	);
};

export default W12MForm;
