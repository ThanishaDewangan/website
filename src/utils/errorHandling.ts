export class APIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function handleAPIResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError(
      error.message || 'An error occurred',
      response.status,
      response
    );
  }
  return response.json();
}