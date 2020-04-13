import RestClient from "./restClient";
import { httpMethods } from "../constants";
import Urls from "./urls";

export default class BaseApi {
  constructor() {
    this.Urls = Urls;
    this.Methods = httpMethods;
  }

  static execute(
    method,
    endpoint,
    headers = undefined,
    isAuthen = true,
    body = undefined
  ) {
    const restClient = new RestClient(method, endpoint);
    return restClient.execute(headers, body, isAuthen).then(res => {
      return res;
    });
  }
}
