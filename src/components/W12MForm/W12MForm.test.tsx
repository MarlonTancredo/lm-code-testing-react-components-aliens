import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import { labelNames } from './W12MForm';

describe("W12Form component", () => {

	it('renders form elements', () => {
		const { specieLabel, planetLabel, beingsQtyLabel, questionLabel, sparingReasonLabel } = labelNames

		render(<W12MForm />);

		const specieInput = screen.queryByLabelText(specieLabel)
		const planetInput = screen.queryByLabelText(planetLabel)
		const beingInput = screen.queryByLabelText(beingsQtyLabel)
		const select = screen.queryByLabelText(questionLabel)
		const textArea = screen.queryByLabelText(sparingReasonLabel)
		const submitButton = screen.getByRole("button")

		expect(specieInput).toBeInTheDocument()
		expect(planetInput).toBeInTheDocument()
		expect(beingInput).toBeInTheDocument()
		expect(select).toBeInTheDocument()
		expect(textArea).toBeInTheDocument()
		expect(submitButton).toBeDisabled()
	});
})
