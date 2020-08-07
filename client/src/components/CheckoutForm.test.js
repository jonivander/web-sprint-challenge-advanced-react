import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>); 
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const addressInput = screen.getByPlaceholderText(/address/i);
    const cityInput = screen.getByPlaceholderText(/city/i);
    const stateInput = screen.getByPlaceholderText(/state/i);
    const zipInput = screen.getByPlaceholderText(/zip/i);

    fireEvent.change(firstNameInput, { target: { value: 'Mary' } } );
    fireEvent.change(lastNameInput, { target: { value: 'Poppins' } } );
    fireEvent.change(addressInput, { target: { value: '14 Cherry Tree Lane' } } );
    fireEvent.change(cityInput, { target: { value: 'London' } } );
    fireEvent.change(stateInput, { target: { value: 'England' } } );
    fireEvent.change(zipInput, { target: { value: 'W105LU' } } );

    const checkoutButton = screen.getByRole('button', { type: /checkout/i } );

    fireEvent.click(checkoutButton);

    const nameRender = await screen.findByTestId(/successMessage/i);
    expect(nameRender).toBeInTheDocument();

    expect(screen.getByText(/Mary/i)).toBeInTheDocument(); 
});
