import { useState } from "react";
import W12MHeader from "../W12M-header/W12MHeader";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";

interface FormFields {
	specieName: string;
	planetName: string;
	numberOfBeings: string;
	question: string | null;
	textArea: string | null;
}

const formFields: FormFields = {
	specieName: "humans",
	planetName: "Earth",
	numberOfBeings: "1000000000",
	question: "",
	textArea: "",
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
	const [fieldState, setFormState] = useState(formFields);
	const { specieName, planetName, numberOfBeings } = fieldState;

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log(fieldState);
	};

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
					onChangeInput={(value) =>
						setFormState({ ...fieldState, specieName: value })
					}
				/>
				<TextInput
					label={planetLabel}
					value={planetName}
					onChangeInput={(value) =>
						setFormState({ ...fieldState, planetName: value })
					}
				/>
				<TextInput
					label={beingsQtyLabel}
					value={numberOfBeings}
					onChangeInput={(value) =>
						setFormState({ ...fieldState, numberOfBeings: value })
					}
				/>
				<SelectInput
					label={questionLabel}
					onChangeInput={(value) =>
						setFormState({ ...fieldState, question: value })
					}
				/>
				<TextAreaInput
					label={sparingReasonLabel}
					onChangeInput={(value) =>
						setFormState({ ...fieldState, textArea: value })
					}
				/>
				<input type="submit" style={{ padding: "1rem" }} />
			</form>
		</section>
	);
};

export default W12MForm;
