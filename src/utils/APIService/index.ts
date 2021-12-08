import axios, { Axios } from 'axios';

const BASE_URL = 'http://localhost:5000/api';

class APIService {
  private _instance: Axios;

  constructor() {
    this._instance = new Axios({
      baseURL: BASE_URL,
      transformResponse: [
        (data) => {
          let res;
          try {
            res = JSON.parse(data);
          } catch (error) {
            throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
          }
          return res;
        }
      ],
      transformRequest: [
        (data, headers) => {
          const stringify = JSON.stringify(data);
          return stringify;
        }
      ],
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  }

  async register(name: string) {
    const res = await this._instance.post('/user', {
      name
    });
    return res.data;
  }

  //Room API
  async getRooms() {
    const res = await this._instance.get('/room');
    return res.data;
  }

  async createRoom(name: string, userId: string) {
    const res = await this._instance.post('/room', {
      name,
      userId
    });
    return res.data;
  }

  async joinRoom(roomId: string, userId: string, role: string = 'OBSERVER', accessCode: number = 123456) {
    const res = await this._instance.post(`/room/join/${roomId}`, {
      role,
      userId,
      accessCode,
    });
    return res.data;
  }

  async leaveRoom(roomId: string, userId: string) {
    const res = await this._instance.post(`/room/left/${roomId}`, {
      userId,
    });
    return res.data;
  }
}

export default new APIService();