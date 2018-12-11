import express from 'express';

import RandomPhoneNumberController from '../controllers';
import verifyToken from '../middlewares/verifyToken';

const router = express.Router();


router.get(
  '/token',
  RandomPhoneNumberController.token
);

router.post(
  '/phone-number',
  verifyToken,
  RandomPhoneNumberController.generatePhoneNumber
);

router.get(
  '/counts',
  verifyToken,
  RandomPhoneNumberController.counts
)

export default router;
