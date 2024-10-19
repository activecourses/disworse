import { ContextIdFactory } from "@nestjs/core";
import { Test, TestingModule } from "@nestjs/testing";
import { TestManager } from "../test/TestManager";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { DrizzleService } from "./drizzle/drizzle.service";

describe("[GraphQL] [UnitTesting] AppService", () => {
    let appService: AppService;
    let drizzleService: DrizzleService;

    // Note: we *shouldn't* (?) need TestManager for unit tests.
    beforeAll(async () => {
        const app: TestingModule = await Test.createTestingModule({
            // Mocking can happen here (if appService has dependencies),
            // or add specific mocks to each test case.
            providers: [
                AppService,
                {
                    provide: DrizzleService,
                    useValue: {
                        db: {
                            query: {
                                users: {
                                    findMany: jest.fn(() => []),
                                },
                            },
                        },
                    },
                },
            ],
        }).compile();

        drizzleService = app.get<DrizzleService>(DrizzleService);
        appService = app.get<AppService>(AppService);
    });

    afterAll(async () => {});

    it('should return "Hello World!"', async () => {
        const spy = jest.spyOn(drizzleService.db.query.users, "findMany");

        const result = appService.testDb();
        expect(spy).toHaveBeenCalled();
        expect(result).toBe("[]");
    });
});
