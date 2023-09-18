import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';

describe("W12Form component", () => {

	it('renders form elements', () => {
		render(<W12MForm />);
		const inputField = screen.queryByLabelText("Specie Name:")

		expect(inputField).toBeInTheDocument()
		expect(screen.getByLabelText("Planet Name:")).toBeInTheDocument()
		expect(screen.getByLabelText("Number of beings:")).toBeInTheDocument()
	});
})
