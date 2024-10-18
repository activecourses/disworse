import { ContextIdFactory } from "@nestjs/core";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "./app.module";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { DrizzleModule } from "./drizzle/drizzle.module";

describe("AppService", () => {
    let appResolver: AppResolver;

    beforeEach(async () => {
        // TODO: create proper test module / class.
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        const contextId = ContextIdFactory.create();
        jest.spyOn(ContextIdFactory, "getByRequest").mockImplementation(
            () => contextId,
        );

        appResolver = await app.resolve(AppResolver, contextId);
    });

    describe("root", () => {
        it('should return "Hello World!"', () => {
            expect(appResolver.hello()).toBe("Hello World!");
        });
    });
});
