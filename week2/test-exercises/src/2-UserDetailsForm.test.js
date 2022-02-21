import { render, screen, fireEvent } from "@testing-library/react";

import UserDetailsForm from "./2-UserDetailsForm";

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};

describe("UserDetailsForm", () => {
  it("Correctly fills in the initial values", () => {
    render(<UserDetailsForm initialUserValues={testUser} />)
    const firstNameElement = screen.getByLabelText('First name:').getAttribute('value');
    const lastNameElement = screen.getByLabelText('Last name:').getAttribute('value');
    const roleElement = screen.getByLabelText('Role:').getAttribute('value');
    expect(firstNameElement).toBe(testUser.firstName);
    expect(lastNameElement).toBe(testUser.lastName);
    expect(roleElement).toBe(testUser.role);
  });

  it("Correctly changes a fields value", () => {
    render(<UserDetailsForm initialUserValues={changedUser} />)
    const firstNameElement = screen.getByLabelText('First name:');
    const lastNameElement = screen.getByLabelText('Last name:');
    const roleElement = screen.getByLabelText('Role:');
    fireEvent.change(firstNameElement, { target: { value: changedUser.firstName } });
    fireEvent.change(lastNameElement, { target: { value: changedUser.lastName } });
    fireEvent.change(roleElement, { target: { value: changedUser.role } });
    expect(firstNameElement.value).toBe(changedUser.firstName)
    expect(lastNameElement.value).toBe(changedUser.lastName)
    expect(roleElement.value).toBe(changedUser.role)
  });

  it("Submits the right values to the onSubmit function", () => {
    const onSubmitFunction = jest.fn(() => { });
    render(<UserDetailsForm initialUserValues={testUser} onSubmit={onSubmitFunction} />)
    const submitElement = screen.getByRole('button', { name: /Submit/i });
    const firstNameElement = screen.getByLabelText('First name:').getAttribute('value');
    const lastNameElement = screen.getByLabelText('Last name:').getAttribute('value');
    const roleElement = screen.getByLabelText('Role:').getAttribute('value');
    fireEvent.click(submitElement);
    expect(onSubmitFunction).toHaveBeenCalledWith({ firstName: firstNameElement, lastName: lastNameElement, role: roleElement });
  });
});
