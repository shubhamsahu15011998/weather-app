import React from 'react';
import {
    cleanup,
    render,
    screen
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import Forecast from "../Forecast"
import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Sapshot Matching", () => {

            const tree = renderer.create( < Forecast > < /Forecast>).toJSON();
                expect(tree).toMatchSnapshot();
            });

        test('Renders Input Label correctly', () => {
                render( < Forecast > < /Forecast>);
                    expect(screen.getByPlaceholderText("Enter City")).toBeInTheDocument();
                });

            test('Renders Radio Button 1 Label correctly', () => {
                    render( < Forecast > < /Forecast>);
                        expect(screen.getByText("Fahrenheit")).toBeInTheDocument();
                    });

                test('Renders Radio Button 2 Label correctly', () => {
                        render( < Forecast > < /Forecast>);
                            expect(screen.getByText("Celcius")).toBeInTheDocument();
                        });

                    test('Renders Submit Button correctly', () => {
                            render( < Forecast > < /Forecast>);
                                expect(screen.getByText("Get Forecast")).toBeInTheDocument();
                            });