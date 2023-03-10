import React from 'react'
import { render, screen ,cleanup  } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "../components/Login";


describe("app page",()=>{
    beforeEach(() => {
        render(<Login />);
      });

    test("should render list",()=>{
        const login = screen.getByRole("heading",{name: /login/i});
        expect(login).toBeInTheDocument();
    })
})

// test("list",()=>{
//     render(<Login />)
//     const login = screen.getByRole("heading",{name: /login/i});
//     expect(login).toBeInTheDocument();
// })