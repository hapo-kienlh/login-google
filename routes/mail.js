const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const emojis = [
  "👻", "🌟", "😀", "🎉", "❤️", "🍔", "🌸", "🚀", "🐱", "🌈",
  "🎈", "🍕", "🎵", "🌊", "🌞", "🌼", "📚", "🎳", "⛷️", "🎲",
  "🌻", "🍦", "🏖️", "🌮", "🎸", "🏀", "🎤", "🐶", "🚗", "🏡",
  "🌺", "🍓", "🏄", "🎪", "🎮", "🏆", "🏠", "🌞", "🎡", "🚁",
  "🌮", "🍩", "🚲", "🎭", "📷", "🏔️", "🍁", "🍂", "🚢", "🌵"
];


/* GET home page. */
router.post('/', async (req, res, next) => {
  try {
    const { email, message } = req.body
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "kien.lh@haposoft.com",
        pass: "kiirxbqsejljdxnw",
      },
    });


    const info = await transporter.sendMail({
      from: '"👻" <kien.lh@haposoft.com>',
      to: email,
      subject: "Kiennn 🚀 🚀 🚀",
      text: "Hello",
      html: `<p>${message}</p> `,
    });

    res.json({ msg: 'send mailer success', mailId: info.messageId })

  } catch (error) {
    console.log(error)
  }

});


module.exports = router;
