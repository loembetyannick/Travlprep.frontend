// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5048';

export const API_ENDPOINTS = {
  EMAIL_SUBSCRIPTION: `${API_BASE_URL}/api/EmailSubscription/subscribe`,
};
 
export default API_BASE_URL; 