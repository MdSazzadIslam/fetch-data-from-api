import http from "../config";

class UserService {
  getUsers = async () => {
    return await http.get("?page=5");
  };
}
export default new UserService();
