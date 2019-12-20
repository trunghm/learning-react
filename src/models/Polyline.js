export default class Point {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.point = data.point || "";
  }
}
