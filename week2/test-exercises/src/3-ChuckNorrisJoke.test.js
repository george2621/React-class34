import { render, screen } from "@testing-library/react";
import RandomJoke from "./3-ChuckNorrisJoke";
import fetchMock from "jest-fetch-mock";

/**
 * ChuckNorrisJoke is a component that fetches a joke from an api and displays it on the screen.
 * It is a simple component that we can use to practice API testing! Let's look at how the user sees the component:
 *
 * - When starting, the user should see a Loading... text
 * - Once the joke has been fetched it should be shown on the screen
 * - If there is an error, an error message needs to be shown to the user
 *
 * You don't want your component to really connect to the API when unit testing so you will want to mock that.
 * To make this easier, a package called `jest-fetch-mock` can be useful, you will have to set that up yourself.
 * Have a look at: https://github.com/jefflau/jest-fetch-mock
 */
const joke = "Chuck Norris's log statements are always at the FATAL level.";
const testSuccessfulResponse = JSON.stringify({
  type: "success",
  value: {
    id: 538,
    joke,
    categories: ["nerdy"],
  },
});

beforeEach(() => fetchMock.resetMocks());
beforeAll(() => (console.error = jest.fn()));

const testUnhappyResponse = JSON.stringify({});

describe("ChuckNorrisJoke", () => {

  it("should show the Loading text when the component is still loading", async () => {
    fetch.mockResponse(testSuccessfulResponse);
    render(<RandomJoke />);
    const heading = screen.getByText("Loading...");
    expect(heading).toBeInTheDocument();
  });

  it("should show the joke the fetch returns", async () => {
    fetch.mockResponseOnce(testSuccessfulResponse);
    render(<RandomJoke />);
    const jokeElement = await screen.findByText(joke)
    expect(jokeElement).toBeInTheDocument();
  });

  it("should show an error message if the fetch fails", async () => {
    fetch.mockResponseOnce(testUnhappyResponse);
    render(<RandomJoke />);
    const errorEle = await screen.findByText(
      /Something went wrong with grabbing your joke. Please try again later./i
    );
    expect(errorEle).toBeInTheDocument();
  });
});