import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Payload } from './../src/model/payload';
import {response} from "express";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/weather (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/weather/42.278046,-83.738220');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: {
        fahrenheit: expect.any(Number),
        condition: expect.any(String)
      }
    });
  });

});
