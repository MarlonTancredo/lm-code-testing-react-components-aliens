import { render, screen } from '@testing-library/react';
import TextInput from "./TextInput"

describe("TextInput component", () => {
    it("Should render textInput component", () => {
        const props = {
            label: "test",
            value: "test",
            errorMessage: "test",
            onChangeInput: () => { }
        }

        render(<TextInput {...props} />)

        const field = screen.getByLabelText("test")

        expect(field).toBeInTheDocument()

    })
})