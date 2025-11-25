export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormSubmission extends ContactFormState {
  recaptchaToken: string;
}
