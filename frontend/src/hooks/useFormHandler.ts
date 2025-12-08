import { useState } from "react";
import { parseApiError } from "../utils/apiErrorHandler";

export const useFormHandler = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (
    onSubmit: () => Promise<void>,
    onSuccess?: () => void
  ) => {
    setErrors({});
    setSuccessMessage("");

    try {
      await onSubmit();
      setSuccessMessage("Success!");
      onSuccess?.();
    } catch (error) {
      const apiErrors = parseApiError(error);
      const errorMap: Record<string, string> = {};
      apiErrors.forEach((err) => {
        errorMap[err.field] = err.message;
      });
      setErrors(errorMap);
    }
  };

  const clearFieldError = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return {
    errors,
    successMessage,
    handleSubmit,
    clearFieldError,
  };
};