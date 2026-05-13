import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    const result = cn("p-4", "text-white", "bg-blue-500");
    expect(result).toContain("p-4");
    expect(result).toContain("text-white");
    expect(result).toContain("bg-blue-500");
  });

  it("should handle conditional class names", () => {
    const isActive = true;
    const result = cn("p-4", isActive && "bg-blue-500");
    expect(result).toContain("bg-blue-500");
  });

  it("should ignore falsy values", () => {
    const result = cn("p-4", false, null, undefined, "text-white");
    expect(result).toContain("p-4");
    expect(result).toContain("text-white");
    expect(result).not.toContain("false");
    expect(result).not.toContain("null");
  });

  it("should merge conflicting Tailwind classes", () => {
    const result = cn("p-2", "p-4");
    expect(result).toContain("p-4");
    expect(result).not.toContain("p-2");
  });
});
