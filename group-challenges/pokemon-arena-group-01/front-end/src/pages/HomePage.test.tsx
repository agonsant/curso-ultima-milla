import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; 
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a form asking for username and language", () => {
      render (
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>   
      )
      const userName = screen.getByPlaceholderText("Enter username")
      const language = screen.getByPlaceholderText("Enter language")

      expect(userName).toBeInTheDocument();
      expect(language).toBeInTheDocument();
    })  
  })
})