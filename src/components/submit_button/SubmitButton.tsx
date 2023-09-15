interface SubmitButtonProps {
    isDisable: boolean
}

const SubmitButton = ({ isDisable }: SubmitButtonProps) =>
    <>
        <input type="submit" style={{ padding: "1rem" }} disabled={isDisable} />
    </>

export default SubmitButton