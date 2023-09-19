interface TextAreaInputProps {
    label: string;
    onChangeInput: (value: string) => void;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    label,
    onChangeInput,
}) => {
    return (
        <>
            <label htmlFor="TextAreaInput">{label}</label>
            <textarea
                id="TextAreaInput"
                onChange={(e) => onChangeInput(e.target.value)}
            />
        </>
    );
};

export default TextAreaInput;
