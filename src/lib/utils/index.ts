export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public code?: number | string,
    public stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.stack = stack;
    this.code = code;
  }
}
