export default class BaseService {
  static handleError(error) {
    throw error.message || error;
  }
}
