import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import { labelNames } from './W12MForm';

describe("W12Form component", () => {

	const { specieLabel, planetLabel, beingsQtyLabel, questionLabel, sparingReasonLabel } = labelNames

	it('should render specie input element', () => {
		render(<W12MForm />);
		const specieInput = screen.queryByLabelText(specieLabel)
		expect(specieInput).toBeInTheDocument()
	});
	it('should render planet input element', () => {
		render(<W12MForm />);
		const planetInput = screen.queryByLabelText(planetLabel)
		expect(planetInput).toBeInTheDocument()
	});
	it('should render being input element', () => {
		render(<W12MForm />);
		const beingInput = screen.queryByLabelText(beingsQtyLabel)
		expect(beingInput).toBeInTheDocument()
	});
	it('should render question input element', () => {
		render(<W12MForm />);
		const select = screen.queryByLabelText(questionLabel)
		expect(select).toBeInTheDocument()
	});
	it('should render sparing input element', () => {
		render(<W12MForm />);
		const textArea = screen.queryByLabelText(sparingReasonLabel)
		expect(textArea).toBeInTheDocument()
	});
	it('should render submit button input element', () => {
		render(<W12MForm />);
		const submitButton = screen.getByRole("button")
		expect(submitButton).toBeDisabled()
	});
})
