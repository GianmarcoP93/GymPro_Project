const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { User, Admin } = require("../../db");
const { verifyUser } = require("../../middleware/userAuth");
const nodemailer = require("nodemailer");

const { EMAIL, PW } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: `${EMAIL}`,
    pass: `${PW}`,
  },
});

/**
 * @path /api/users/register
 */

app.post("/register", async (req, res) => {
  const { subscription, plan } = req.body;
  const parts = plan.month_cost.split("-");
  const months = Number(parts[0]);
  const cost = Number(parts[1]);

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    subscription: Joi.date().required(),
    passNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    tel: Joi.number().required(),
    plan: Joi.object().required(),
    role: Joi.string().required(),
    subscriptionExp: Joi.date().required(),
    cardInfo: Joi.object().required(),
    gym: Joi.string().required(),
  });
  try {
    const { email, tel } = req.body;

    const data = await schema.validateAsync(req.body);

    const generatePassword = (len, arr) => {
      let pass = "";
      for (let i = len; i > 0; i--) {
        pass += arr[Math.floor(Math.random() * arr.length)];
      }
      return pass;
    };

    const password = generatePassword(
      8,
      "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ!$_@?#"
    );

    const cryptedPw = bcrypt.hashSync(password, 12);

    data.password = cryptedPw;

    data.email = data.email.toLowerCase();

    const findUserEmail = await User.findOne({ email }, "-password", {
      lean: true,
    });

    const findAdminEmail = await Admin.findOne(
      { email: req.body.email },
      "-_id email",
      {
        lean: true,
      }
    );

    if (findUserEmail || findAdminEmail) {
      return res.status(400).json({
        message: "Email già esistente.",
      });
    }

    const findTel = await User.findOne({ tel }, "-_id tel", {
      lean: true,
    });

    if (findTel) {
      console.log(findTel);
      return res.status(400).json({
        message: "Numero cellulare già esistente.",
      });
    }

    const user = await User.create(data);

    const subscriptionExp = new Date(subscription);

    switch (months) {
      case 1:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 3:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 6:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
      case 12:
        subscriptionExp.setMonth(subscriptionExp.getMonth() + months);
        break;
    }
    user.subscriptionExp = subscriptionExp;
    user.plan.months = months;
    user.plan.cost = cost;
    await user.save();

    const mailOptions = {
      from: `${EMAIL}`,
      to: `${email}`,
      subject: "Registrazione GymPro",
      html: `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/><!--<![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:660px) {
			.image_block img.fullWidth {
				max-width: 100% !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
				display: none !important;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-links,
			.menu-checkbox[type=checkbox]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links>a,
			.menu-checkbox[type=checkbox]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}

		#memu-r0c0m5:checked~.menu-links {
			background-color: transparent !important;
		}

		#memu-r0c0m5:checked~.menu-links a,
		#memu-r0c0m5:checked~.menu-links span {
			color: #fff !important;
		}
	</style>
</head>
<body style="background-color: white; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: white;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: white;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3571/bg-top.png'); background-position: top center; background-repeat: repeat; color: #000; width: 640px; margin: 0 auto;" width="640">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:15px;line-height:15px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;">
<div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
<p style="margin: 0; word-break: break-word; color:white; text-decoration:none;">www.gympro.com</p>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:35px;line-height:35px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Your Logo" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/1047633_1032804/imported/c789a1-20230901-082232/1_LogoPiccolo.png" style="display: block; height: auto; border: 0; max-width: 106px; width: 100%;" title="Your Logo" width="106"/></div>
</td>
</tr>
</table>
<div class="spacer_block block-5" style="height:35px;line-height:35px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="menu_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="color:#ffffff;font-family:inherit;font-size:14px;padding-bottom:10px;padding-top:10px;text-align:center;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r0c0m5" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
<div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r0c0m5" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: transparent; border-radius: 0;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="http://localhost:5173/" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Home</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><span class="label" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;color:false;letter-spacing:normal;">Aziende Partner</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><span class="label" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;color:false;letter-spacing:normal;">Chi siamo</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><span class="label" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;color:false;letter-spacing:normal;">FAQ</span><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="divider_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-right:20px;">
<div align="right" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="35%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 10px solid #F87A2C;"><span></span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-8" style="height:10px;line-height:10px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Man Lifting Dumbell" class="fullWidth" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/1047633_1032804/weights.png" style="display: block; height: auto; border: 0; max-width: 480px; width: 100%;" title="Man Lifting Dumbell" width="480"/></div>
</td>
</tr>
</table>
<div class="spacer_block block-10" style="height:40px;line-height:40px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #14d9f6; direction: ltr; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 35px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder" style="color: #ff8800;">Let's Talk About Us</span></h1>
</td>
</tr>
</table>
<div class="spacer_block block-12" style="height:30px;line-height:30px;font-size:1px;"></div>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;">
<div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
<p style="margin: 0; word-break: break-word;"><span style="color: #ffffff;">GymPro è la tua piattaforma dedicata al monitoraggio dei progressi. Con noi, puoi tracciare i tuoi miglioramenti nel tempo e ricevere piani di allenamento personalizzati. Unisciti a noi oggi per raggiungere i tuoi obiettivi di fitness in modo più intelligente e motivante!</span></p>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-14" style="text-align:center;height:40px;line-height:40px;font-size:16px;color:white;">E-mail: ${email}</div>
<div class="spacer_block block-15" style="text-align:center;height:60px;line-height:60px;font-size:16px;color:white;">Password: ${password}</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>
`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Errore nell'invio dell'e-mail!" });
      }
    });

    return res.status(201).json({ user: user._doc });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Richiesta fallita, codice errore: 500" });
  }
});

/**
 * @path /api/users/getUser
 */

app.get("/getUser", verifyUser, async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = app;
