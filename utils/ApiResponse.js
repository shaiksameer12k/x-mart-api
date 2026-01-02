export class ApiResponse {
  constructor(status = 200, message = "Success", data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status >= 200 && status < 300;
    this.timestamp = new Date().toISOString();
  }
}
