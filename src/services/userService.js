import http from "../config";

class UserService {
  getUsers = async () => {
    return await http.get("", {
      params: {
        results: 5,
      },
    });
  };
}
export default new UserService();
