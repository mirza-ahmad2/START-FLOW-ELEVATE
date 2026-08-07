type RuntimeErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Lightweight runtime error reporter for production boundaries.
 * Logs to console; can be wired to an external sink later.
 */
export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: RuntimeErrorOptions = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[runtime]", message, {
    ...context,
    ...options,
    stack: error instanceof Error ? error.stack : undefined,
    route: window.location.pathname,
  });
}
