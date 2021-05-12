import api from '../API/api'


class AuthService {
  async login(email, password) {
    try{
      const response = await api.post("/admin/login", {email,password})

      if (response.data.token) {
        localStorage.setItem("admin", JSON.stringify(response.data));
      }
      
      return response.data;
    }
    catch(e){
      throw new Error(e.message);
    }

  }

  async logout() {
    await api.post('/admin/logout',{
          headers:{
              Authentication:JSON.parse(localStorage.getItem("admin")).token
          }
      })
    localStorage.removeItem("admin");
  }

  async register(email, password) {
    const response = await api.post("/admin", {
      email,
      password
    });
    if (response.data.token) {
      localStorage.setItem("admin", JSON.stringify(response.data));
    }
    return response;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('admin'));
  }
}

export default new AuthService();