import "tsconfig-paths/register";

import { createClient } from "redis";
import { TestManager } from "./TestManager";

export default async (): Promise<void> => {
    console.log("# Started Jest globalTeardown.");
    const testManager = new TestManager();

    await testManager.beforeAll();

    await testManager.app.init();

    // TODO: Apply Database migrations/seeders.

    await testManager.app.close();

    // Delete records in redis.
    const client = createClient();
    await client.connect();
    await client.flushAll();
    console.log("# Finished Jest globalTeardown.");
};
