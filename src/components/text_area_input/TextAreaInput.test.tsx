import { render, screen } from '@testing-library/react';
import TextAreaInput from "./TextAreaInput"

describe("TextAreaInputComponent", () => {
    it("should render the component TextAreaInputComponent", () => {
        const props = {
            label: "test",
            onChangeInput: () => { }
        }

        render(<TextAreaInput {...props} />)

        const component = screen.getByLabelText(props.label)
        expect(component).toBeInTheDocument()
    })
})