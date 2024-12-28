import { axiosInstance } from "./authService"
import { handleRequest } from "./handleRequest"

export const fetchUserProfile = async () => {
    try {
      console.log('Fetching user profile...');
      const response = await axiosInstance.get('/api/user/profile');
      console.log('Profile response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Profile fetch error:', error);
      throw error;
    }
  };