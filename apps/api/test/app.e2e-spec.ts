import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/graphql helloworld", () => {
        return request(app.getHttpServer())
            .post("/graphql")
            .send({
                query: "{ hello }",
            })
            .expect(200)
            .expect({ data: { hello: "Hello World!" } });
    });
});
