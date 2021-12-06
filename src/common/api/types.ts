export type LocalResponse =
  | { success: true; data?: any }
  | { success: false; data?: any; error: string }
