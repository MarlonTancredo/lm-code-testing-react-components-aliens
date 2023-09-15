interface ErrorMessageProps {
    message: string | undefined
}

const ErrorMessage = ({ message }: ErrorMessageProps) =>
    <>
        <p style={{ color: "red" }}>{message}</p>
    </>

export default ErrorMessage