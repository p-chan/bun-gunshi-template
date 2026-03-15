import { describe, expect, it, vi } from "vitest";
import hello from "./hello.ts";

describe("hello command", () => {
  it("greets with default name", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    hello.run?.({ values: { name: "World" } } as never);

    expect(consoleSpy).toHaveBeenCalledWith("Hello, World!");
    consoleSpy.mockRestore();
  });

  it("greets with custom name", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    hello.run?.({ values: { name: "Alice" } } as never);

    expect(consoleSpy).toHaveBeenCalledWith("Hello, Alice!");
    consoleSpy.mockRestore();
  });
});
