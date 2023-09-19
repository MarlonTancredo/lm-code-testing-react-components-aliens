import { fireEvent, render, screen } from '@testing-library/react';
import TextAreaInput from "./TextAreaInput"

const mockOnChangeInput = jest.fn()

const props = {
    label: "test",
    onChangeInput: mockOnChangeInput
}

describe("TextAreaInputComponent", () => {
    it("should render the component TextAreaInputComponent", () => {

        render(<TextAreaInput {...props} />)

        const component = screen.getByLabelText(props.label)
        expect(component).toBeInTheDocument()
    })
    it("should able to input a value", () => {

        render(<TextAreaInput {...props} />)

        const component = screen.getByLabelText(props.label)
        fireEvent.change(component, { target: { value: "test" } })
        expect(component).toHaveValue("test")
    })
})