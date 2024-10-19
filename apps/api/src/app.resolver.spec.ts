import { ContextIdFactory } from "@nestjs/core";
import { TestManager } from "../test/TestManager";
import { AppResolver } from "./app.resolver";

describe("[GraphQL] [IntegrationTesting] AppResolver", () => {
    let testManager = new TestManager();
    let appResolver: AppResolver;

    beforeAll(async () => {
        await testManager.beforeAll();

        // TODO: are there a better handling for this? @xUser5000
        const contextId = ContextIdFactory.create();
        jest.spyOn(ContextIdFactory, "getByRequest").mockImplementation(
            () => contextId,
        );

        appResolver = await testManager.app.resolve(AppResolver, contextId);
    });

    afterAll(async () => {
        await testManager.afterAll();
    });

    it('should return "Hello World!"', async () => {
        const result = appResolver.hello();
        expect(result).toBe("Hello World!");
    });
});
