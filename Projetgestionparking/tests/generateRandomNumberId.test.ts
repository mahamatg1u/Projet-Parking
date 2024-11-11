import {generateRandomNumberId} from "../utils/generateRandomNumberId"
import { test, expect } from "bun:test";  
test("generateRandomId function", () => {
  
      const randomId = generateRandomNumberId();
      expect(randomId).toBeGreaterThanOrEqual(100000);
      expect(randomId).toBeLessThanOrEqual(999999);
  
  });
  
  test('il faut que les deux id ne soient pas les mêmes', () => {
    const id1 = generateRandomNumberId();
    const id2 = generateRandomNumberId();

    expect(id1).not.toEqual(id2);
});