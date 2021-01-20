import React from 'react';
import {
    render,
    screen,
    cleanup
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import Conditions from '../Conditions';
import { validResponse, invalidResponse } from "../../HelperData/CreateDummyResponse";
import { isoCountries } from "../../HelperData/CountryCode";
import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup)

it("Render without crashing", () => {
            var loading = true;
            var responseObj = validResponse;
            const div = document.createElement("div");
            ReactDOM.render( < Conditions loading = { loading }
                responseObj = { responseObj } > < /Conditions>,div);
            });

        it("Render without crashing", () => {
                var loading = false;
                var responseObj = validResponse;
                const div = document.createElement("div");
                ReactDOM.render( < Conditions loading = { loading }
                    responseObj = { responseObj } > < /Conditions>,div);
                });

            it("Render without crashing", () => {
                    var loading = true;
                    var responseObj = invalidResponse;
                    const div = document.createElement("div");
                    ReactDOM.render( < Conditions loading = { loading }
                        responseObj = { responseObj } > < /Conditions>,div);
                    });

                it("Render without crashing", () => {
                        var loading = false;
                        var responseObj = invalidResponse;
                        const div = document.createElement("div");
                        ReactDOM.render( < Conditions loading = { loading }
                            responseObj = { responseObj } > < /Conditions>,div);
                        });

                    test('Renders Loading coorrectly', () => {
                            var loading = true;
                            var responseObj = validResponse;
                            render( < Conditions loading = { loading }
                                responseObj = { responseObj } > < /Conditions>);
                                const linkElement = screen.getByText(/Loading/); expect(linkElement).toBeInTheDocument();
                            });

                        test('Renders temperature coorrectly', () => {
                                var loading = true;
                                var responseObj = validResponse;
                                render( < Conditions loading = { loading }
                                    responseObj = { responseObj } > < /Conditions>);
                                    var expectedTemperature = "It is currently " + Math.round(responseObj.main.temp) + "degrees.";
                                    const linkElement = screen.getByText(expectedTemperature); expect(linkElement).toBeInTheDocument();
                                });

                            test('Renders weather coorrectly', () => {
                                    var loading = true;
                                    var responseObj = validResponse;
                                    render( < Conditions loading = { loading }
                                        responseObj = { responseObj } > < /Conditions>);
                                        var expectedWeather = "Outside is " + responseObj.weather[0].description + ".";
                                        const linkElement = screen.getByText(expectedWeather); expect(linkElement).toBeInTheDocument();
                                    });

                                test('Renders pressure coorrectly', () => {
                                        var loading = true;
                                        var responseObj = validResponse;
                                        render( < Conditions loading = { loading }
                                            responseObj = { responseObj } > < /Conditions>);
                                            var expectedPressure = "The pressure is " + responseObj.main.pressure + "pa.";
                                            const linkElement = screen.getByText(expectedPressure); expect(linkElement).toBeInTheDocument();
                                        });

                                    test('Renders humidity coorrectly', () => {
                                            var loading = true;
                                            var responseObj = validResponse;
                                            render( < Conditions loading = { loading }
                                                responseObj = { responseObj } > < /Conditions>);
                                                var expectedHumidity = "The humidity is " + responseObj.main.humidity + ".";
                                                const linkElement = screen.getByText(expectedHumidity); expect(linkElement).toBeInTheDocument();
                                            });

                                        test('Renders state and country coorrectly', () => {
                                                var loading = true;
                                                var responseObj = validResponse;
                                                render( < Conditions loading = { loading }
                                                    responseObj = { responseObj } > < /Conditions>);
                                                    var expectedStateAndCountry = "At " + responseObj.name + ", " + isoCountries[responseObj.sys.country];
                                                    const linkElement = screen.getByText(expectedStateAndCountry); expect(linkElement).toBeInTheDocument();
                                                });