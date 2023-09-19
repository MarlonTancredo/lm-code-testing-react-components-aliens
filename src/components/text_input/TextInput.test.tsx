import { render, screen } from '@testing-library/react';
import TextInput from "./TextInput"

describe("TextInput component", () => {
    it("Should render textInput component", () => {
        const props = {
            label: "Specie Name:",
            value: "humans",
            errorMessage: "Test",
            onChangeInput: () => { }
        }
        const { label, errorMessage } = props

        render(<TextInput {...props} />)

        const field = screen.getByLabelText(label)
        const message = screen.getByText(errorMessage)

        expect(field).toBeInTheDocument()
        expect(message).toBeInTheDocument()
    })
})