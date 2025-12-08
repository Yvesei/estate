export interface ApiError {
  field: string;
  message: string;
}

export const parseApiError = (error: any): ApiError[] => {
  // validation errors
  if (error.response?.status === 400 && error.response?.data?.details) {
    return error.response.data.details.map((err: any) => ({
      field: err.path?.[0] || "general",
      message: err.message,
    }));
  }

  // generic API error
  if (error.response?.data?.error) {
    return [{ field: "general", message: error.response.data.error }];
  }

  // network errors
  if (!error.response) {
    return [{ field: "general", message: "Network error. Please check your connection." }];
  }

  // unexpected errors
  return [{ field: "general", message: "An unexpected error occurred. Please try again." }];
};