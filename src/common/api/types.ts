export type LocalResponse =
  | { success: true; data?: any }
  | { success: true; data?: { $id: string; $values: any } }
  | { success: false; data?: any; error: string }
