import { AppStrings } from "../../models/AppStrings";

export const enUS: AppStrings = {
  errorPage: {
    errorCode: (code: number) => `Error ${code}`,
    cta: "Go back home"
  }
};
