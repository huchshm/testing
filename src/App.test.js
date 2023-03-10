import { render, screen } from "@testing-library/react";
import App from "./App"
import "@testing-library/jest-dom";


describe("app page",()=>{
    beforeEach(() => {
        render(<App />);
      });
    it("should render list",()=>{
        const listitems = screen.getAllByRole("listitem");
        expect(listitems).toHaveLength(3);
    })
})

// test("list",()=>{
//     render(<App />)
//     const listitems = screen.getAllByRole("listitem");
//     expect(listitems).toHaveLength(3);
// })