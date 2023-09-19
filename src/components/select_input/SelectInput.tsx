interface SelectInputProps {
    label: string;
    onChangeInput: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, onChangeInput }) => {
    return (
        <>
            <label htmlFor="selectInput">{label}</label>
            <input
                id="selectInput"
                list="selectInput"
                type="select"
                onChange={(e) => onChangeInput(e.target.value)}
            />
            <datalist id="selectInput">
                <option value="4" />
                <option value="Not 4" />
            </datalist>
        </>
    );
};

export default SelectInput;
