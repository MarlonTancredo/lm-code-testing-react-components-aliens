import ErrorMessage from "./ErrorMessage";
import { checkSpecieNameField, checkPlanetNameField, checkNumberOfBeingField } from "./textInputChecker";

interface TextInputProps {
    label: string;
    value: string;
    onChangeInput: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChangeInput,
}) => {

    const handleErrorMessage = () => {
        switch (label) {
            case "Specie Name:":
                return checkSpecieNameField(value)
            case "Planet Name:":
                return checkPlanetNameField(value)
            case "Number of beings:":
                return checkNumberOfBeingField(value)
        }
    }

    return (
        <>
            <label htmlFor="textInput">{label}</label>
            <input
                id="textInput"
                type="text"
                value={value}
                onChange={(e) => onChangeInput(e.target.value)}
            />
            <ErrorMessage message={handleErrorMessage()} />
        </>
    );
};

export default TextInput;
