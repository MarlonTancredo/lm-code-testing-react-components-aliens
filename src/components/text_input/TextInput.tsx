import ErrorMessage from "../error_message/ErrorMessage";

interface TextInputProps {
    label: string;
    value: string;
    errorMessage: any
    onChangeInput: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    errorMessage,
    onChangeInput,
}) => {

    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type="text"
                value={value}
                onChange={(e) => onChangeInput(e.target.value)}
            />
            <ErrorMessage message={errorMessage} />
        </>
    );
};

export default TextInput;
