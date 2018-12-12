import fs from 'fs';
import path from 'path';

import RandomPhoneNumbers from '../utils';
import Models from '../models';


/**
 * @class RandomPhoneNumberController
 */
export default class RandomPhoneNumberController {

  /**
   * @description Method generates token
   * @param {req}
   * @param {res}
   * @return {string} uniqueId
   */
  static token(req, res) {
    if (req.query.admin === '' ||
        req.query.admin === undefined ||
        req.query.admin !== 'admin') {
          return res.status(401).json({
            success: false,
            error: 'Unauthorized to carry out this operation'
          });
        }
    try {
      const tok = RandomPhoneNumbers.token(req.params.admin);
      res.status(200).json({ success: true, token: tok });
    } catch (e) { res.status(500).json({ error: e.message, success: false }); }
  }

  /**
   * @description Method generates generatePhoneNumber
   * @param {req}
   * @param {res}
   * @return {object} 
   */
  static async generatePhoneNumber(req, res) {
    const phoneId = RandomPhoneNumbers.uniqueId();
    const phoneNumber = RandomPhoneNumbers.phoneNumber();
    try {
      const  saveNumber = new Models(phoneId, phoneNumber);
      const result = await saveNumber.save()
      res.status(201).json({
        response: result,
        success: true
      });
    } catch (e) { res.status(500).json({ error: e.message, success: false }); }
  }

  /**
   * @description Method counts Numbers
   * @param {req}
   * @param {res}
   * @return {object} 
   */
  static counts(req, res) {
    const file = fs.readFileSync(
      path.join(__dirname, '../database/index.json'), 'utf8')
    const db = JSON.parse(file).length;
    res.status(200).json({
      counts: db,
      success: true
    });
  }
}
