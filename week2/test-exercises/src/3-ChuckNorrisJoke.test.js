import { render, screen, waitFor } from "@testing-library/react";
import RandomJoke from "./3-ChuckNorrisJoke";
import { rest } from "msw";
import { setupServer } from "msw/node";
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

const server = setupServer(
  rest.get("http://api.icndb.com/jokes/random", (req, res, ctx) => {
    return res(ctx.json({ testSuccessfulResponse }));
  })
);

// set the server when is bad status code
server.use(
  rest.get("http://api.icndb.com/jokes/random", (req, res, ctx) => {
    return res(ctx.status(500));
  }))

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ChuckNorrisJoke", () => {

  it("should show the Loading text when the component is still loading", async () => {
    render(<RandomJoke />);
    const heading = screen.getByText("Loading...");
    expect(heading).toBeInTheDocument();
  });

  it("should show the joke the fetch returns", async () => {
    render(<RandomJoke />);
    const jokeElement = await screen.findByText(joke)
    expect(jokeElement).toBeInTheDocument();
  });

  it("should show an error message if the fetch fails", async () => {
    render(<RandomJoke />);
    const errorElement = await screen.findByText('Something went wrong with grabbing your joke. Please try again later.')
    expect(errorElement).toBeInTheDocument();
  });
});