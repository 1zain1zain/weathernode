import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Service } from './app.service';
import { WeatherCondition } from "./model/condition";
import { Payload } from "./model/payload";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [Service],
    }).compile();

    appController = app.get<AppController>(AppController);
  });


  describe('weather', () => {
    it('should return current "Weather Condition!"', () => {
      appController.getWeather(42.278046, -83.738220)
          .then((r: Payload) => {
            expect(r.message.fahrenheit).toBeDefined();
            expect(r.message.condition).toBeDefined();
            const temp: number = r.message.fahrenheit;
            // console.log(temp);
            switch (true) {
              case temp >= 85:
                expect(r.message.condition).toBe(WeatherCondition.HOT);
                break;
              case temp <= 50:
                expect(r.message.condition).toBe(WeatherCondition.COLD);
                break;
              default:
                expect(r.message.condition).toBe(WeatherCondition.MODERATE);
            }
          })
    });
  });
});
