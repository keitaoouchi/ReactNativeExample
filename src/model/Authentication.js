import {AsyncStorage} from "react-native";

class Authentication {

  static async load() {
    return Promise.all([
      AsyncStorage.getItem("token"),
      AsyncStorage.getItem("expiresIn")
    ]).then(
      ([token, expiresIn]) => {
        return new Authentication(token, expiresIn);
      },
      (_) => {
        throw "oh!"
      }
    );
  }

  static async save(token, expiresIn) {
    return Promise.all([
      AsyncStorage.setItem("token", token),
      AsyncStorage.setItem("expiresIn", expiresIn)
    ]);
  }

  /**
   *
   * @param token String
   * @param expiresIn String
   */
  constructor(token = null, expiresIn = null) {
    this.token = token;
    this.expiresIn = expiresIn;
  }

  static async invalidate() {
    return Authentication.save(null, null);
  }

  isValid() {
    const epoch = parseInt(this.expiresIn, 10);
    const expiresIn = new Date(epoch)
    return expiresIn > new Date()
  }

  static async request(url) {
    return Authentication.load().then(authentication => {
      return fetch(
        url,
        { headers: {"Authorization": `Bearer ${authentication.token}`} }
      )
    })
  }
}

export default Authentication;