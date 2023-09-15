interface ErrorMessageProps {
    message: any;
}

const ErrorMessage = ({ message }: ErrorMessageProps) =>
    <>
        <p style={{ color: "red" }}>{message}</p>
    </>

export default ErrorMessage