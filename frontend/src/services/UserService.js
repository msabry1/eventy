import { handleRequest } from "./handleRequest";
import authAxios from "./authAxios";

class UserService {
  static fetchUserById = () => {
    const { data, error } = handleRequest(() => authAxios.get(`/users`));
    if (error) {
      console.error(error);
    }
    return data;
  };
}

export default UserService;
