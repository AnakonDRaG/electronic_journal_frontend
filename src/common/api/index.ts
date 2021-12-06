import { LocalResponse } from 'api/types'

export const baseResponse = async (
  request: Promise<LocalResponse>,
): Promise<LocalResponse> => {
  try {
    const response = await request

    if (response.data.success) {
      return { success: true, data: response.data }
    }

    return { success: true, data: response.data }
  } catch (e: any) {
    const message = e.response?.data.message

    return {
      success: false,
      error: message ?? 'Unknown error',
    }
  }
}
