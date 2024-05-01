import {WeatherCondition} from "./condition";

export interface Payload {
    message: {
        fahrenheit: number;
        condition: WeatherCondition
    }
}