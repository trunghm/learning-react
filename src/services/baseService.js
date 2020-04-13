export default class BaseService {
  static handleError(error) {
    console.log("SERVICE ERROR", error);
    throw error.message || error;
  }
}
