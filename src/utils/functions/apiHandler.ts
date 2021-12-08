export type ResponseSucess<T> = {
  status: 'success';
  data: T;
}

export type ResponseError = {
  status: 'error';
  error: {
    errorCode: number;
    errorMessage: string;
  }
}

export type APIResponse<T> = ResponseSucess<T> | ResponseError;