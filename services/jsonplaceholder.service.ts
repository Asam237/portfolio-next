import DataService from "./data.service";

class JsonplaceholderService extends DataService {
  getJsonPlaceholder = () => {
    return this.client.get("/posts");
  };
}

export default JsonplaceholderService;
