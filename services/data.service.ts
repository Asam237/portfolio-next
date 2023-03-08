import axios from "axios";

export default class DataService {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: "",
      headers: {},
    });
  }
  post = (url: string, data: any, config: any) => {
    this.client.post(url, data, config);
  };

  get = (url: string, config: any) => {
    this.client.get(url, config);
  };
}
