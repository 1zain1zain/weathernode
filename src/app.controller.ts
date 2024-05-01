import {Controller, Get, Param} from '@nestjs/common';
import {Service} from './app.service';
import {AxiosResponse} from "axios";
import {WeatherCondition} from "./model/condition";
import {Payload} from "./model/payload";

@Controller()
export class AppController {
  constructor(private readonly service: Service) {}

  @Get(`/weather/:lat,:lon`)
  async getWeather(@Param('lat') lat: number,@Param('lon')  lon: number): Promise<Payload> {
    const resp: AxiosResponse<WeatherResponse> = await this.service.getWeatherFromEndpoint(lat, lon);
    const temp: number = resp.data.main.temp

    const condition: WeatherCondition = this.service.describeWeatherCondition(temp);
    return {
      message: {
        fahrenheit: temp,
        condition: condition
      }
    };
  }

}
