import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @class RandomPhoneNumbers
 */
export default class RandomPhoneNumbers {

  /**
   * @description Method generates uniqueId
   * @param {null}
   * @return {string} uniqueId
   */
  static uniqueId() {
    const pushChar = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    let now = Date.now();
    let unique_id = ''
    let initial_i = 0;
    let initial_j = 0;
    while (initial_i < 8) {
      unique_id += pushChar[now % 64];
      now = parseInt(now / 64);
      initial_i++;
    }
    while (initial_j < 13) {
      unique_id += pushChar.charAt(Math.floor(Math.random() * pushChar.length));
      initial_j++;
    }
    return unique_id;
  }

  /**
   * @description Method generates PhoneNumber
   * @param {null}
   * @return {string} phoneNumber
   */
  static phoneNumber() {
    const num = '0123456789';
    let newPhoneNumber = '0';
    let now = ((Date.now()).toString()).slice(3, Date.now().toString().length)
    let initial_i = 0;
    while (initial_i < 9) {
      newPhoneNumber += num[now[initial_i]];
      initial_i++;
    }
    return newPhoneNumber;
   
  }

  /**
   * @description Method generates token
   * @param {Object} user request object
   * @return {string} token
   */
  static token(user) {
    return jwt.sign({
      token: { user } },
      process.env.SECRET_TOKEN,
      { expiresIn: '24h' },
    );
  }
}
