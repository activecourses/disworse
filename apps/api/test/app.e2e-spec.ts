import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { TestManager } from "./TestManager";

describe("[GraphQL] [E2E] AppModule", () => {
    const testManager = new TestManager();
    let app: INestApplication;

    beforeAll(async () => {
        await testManager.beforeAll();
        app = testManager.app;
    });

    afterAll(async () => {
        await testManager.afterAll();
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
