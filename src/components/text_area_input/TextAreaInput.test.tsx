import { render, screen } from '@testing-library/react';
import TextAreaInput from "./TextAreaInput"

const mockOnChangeInput = jest.fn()

describe("TextAreaInputComponent", () => {
    it("should render the component TextAreaInputComponent", () => {
        const props = {
            label: "test",
            onChangeInput: mockOnChangeInput
        }

        render(<TextAreaInput {...props} />)

        const component = screen.getByLabelText(props.label)
        expect(component).toBeInTheDocument()
    })
})