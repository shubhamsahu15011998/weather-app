import React from 'react';
import {
    cleanup,
    screen,
    render
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import Errors from "../Errors"
import { invalidResponse } from "../../HelperData/CreateDummyResponse";

afterEach(cleanup)

it("Renders without crashing", () => {
            var responseObj = invalidResponse;
            const div = document.createElement("div");
            ReactDOM.render( < Errors responseObj > < /Errors>,div);
            });

        test('Renders App component', () => {
                var responseObj = invalidResponse;
                render( < Errors responseObj = { responseObj } > < /Errors>);
                    expect(screen.getByText(responseObj.message)).toBeInTheDocument();
                });