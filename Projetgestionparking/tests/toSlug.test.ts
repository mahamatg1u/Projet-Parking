import {toSlug} from "../utils/ToSlug" 
import { describe, it, expect } from "bun:test";  
describe("HelloYou function", () => {
  
  it("appelle le nom", () => {
    const result = toSlug("SIAM£UR Kim");
    const expected = "siamur-kim";
    expect(result).toBe(expected);
    });
  
  });

