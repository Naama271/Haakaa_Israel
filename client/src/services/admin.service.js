import axios from 'axios';
import authHeader from './auth-header';
import api from '../API/api'
// const API_URL = 'http://localhost:8080/api/test/';

class AdminService {

  async getAdminData() {
    return await api.get('/admin/me', { headers: authHeader() });
  }

  // async editDistributer() {
  //   return await api.get('/admin/me', { headers: authHeader() });

  // }
  
  
}

export default new AdminService();