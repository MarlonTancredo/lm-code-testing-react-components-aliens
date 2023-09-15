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

    return (
        <>
            <label htmlFor="textInput">{label}</label>
            <input
                id="textInput"
                type="text"
                value={value}
                onChange={(e) => onChangeInput(e.target.value)}
            />
        </>
    );
};

export default TextInput;
