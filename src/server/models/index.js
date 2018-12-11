import fs from 'fs';
import path from 'path';


/**
 * @class RandomPhoneNumbers
 */
export default class Models {
  constructor(id, phoneNumber) {
    this.id = id;
    this.phoneNumber = phoneNumber;
  }

  /**
   * @description Method saves PhoneNumbers to database
   * @param {null}
   * @return {Object} PhoneNumber
   */
  save() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newInstance = { id: this.id, phone_number: this.phoneNumber };
        const file = fs.readFileSync(
          path.join(__dirname, '../database/index.json'), 'utf8')
        const db = JSON.parse(file);
        db.push(newInstance);
        fs.writeFileSync(
          path.join(__dirname, '../database/index.json'),
          JSON.stringify(db), (err) => {
            if (err) return;
          });
          resolve(newInstance);
      }, 100);
    });
  }
}
