export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  params?: unknown;
  haders?: unknown;
  body?: B;
}
