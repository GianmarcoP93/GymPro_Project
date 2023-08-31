const express = require("express");
const { verifyAdmin } = require("../../middleWare/adminAuth");
const { User } = require("../../db");
const app = express.Router();

/**
 * @path /api/chartData/:id
 */

app.get("/:admin_id", verifyAdmin, async (req, res) => {
  const { admin_id } = req.params;

  try {
    const users = await User.find(
      { gym: admin_id },
      "-_id subscription plan.cost",
      {
        lean: true,
      }
    );

    const months = users.reduce((a, b) => {
      const numberMonth = b.subscription.getMonth();
      const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString("it-IT", { month: "short" });
      };
      const month = getMonthName(numberMonth);
      const cost = b.plan.cost;
      const index = a.findIndex((i) => {
        return i.month === month;
      });

      if (index === -1) {
        let obj = { month, Entrate: cost };

        a.push(obj);
      } else a[index] = { ...a[index], Entrate: a[index].Entrate + cost };

      return a;
    }, []);

    return res.status(200).json(months);
  } catch (error) {
    return res.status(500).json({ message: "Errore nell'ottenimento dati" });
  }
});

module.exports = app;
