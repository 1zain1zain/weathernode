import { Injectable} from '@nestjs/common';
import axios, {AxiosResponse} from 'axios';
import {WeatherCondition} from "./model/condition";


@Injectable()
export class Service {

  getWeatherFromEndpoint(lat: number, lon: number): Promise<AxiosResponse<WeatherResponse>> {
    const apiKey: string = process.env.API_KEY;
    const baseUrl: string = `https://api.openweathermap.org/data/2.5/weather`;
    const endpoint: string = `${baseUrl}?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`

    try {
      return axios.get<WeatherResponse>(endpoint);
    } catch (error) {
      // Handle error
      throw new Error(`Failed to call remote endpoint: ${error.message}`);
    }
  }

  describeWeatherCondition(feelsLike: number): WeatherCondition {
    if (feelsLike >= 85) {
      return WeatherCondition.HOT;
    } else if (feelsLike <= 50) {
      return WeatherCondition.COLD;
    } else {
      return WeatherCondition.MODERATE;
    }
  }

}