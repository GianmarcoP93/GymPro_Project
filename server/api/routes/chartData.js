const express = require("express");
const { verifyAdmin } = require("../../middleWare/adminAuth");
const { User } = require("../../db");
const app = express.Router();

/**
 * @path /api/chartData/:id
 */

app.get("/:admin_id", verifyAdmin, async (req, res) => {
  const { admin_id } = req.params;

  const data = [
    {
      month: "Gen",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Feb",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Mar",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Apr",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Mag",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Giu",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Lug",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Ago",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Set",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Ott",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Nov",
      Entrate: 0,
      Iscrizioni: 0,
    },
    {
      month: "Dic",
      Entrate: 0,
      Iscrizioni: 0,
    },
  ];

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
        date.setDate(1);
        date.setMonth(monthNumber);

        const updatedDate = date.toLocaleString("it-IT", { month: "short" });
        const toUpperCase =
          updatedDate.charAt(0).toUpperCase() + updatedDate.slice(1);

        return toUpperCase;
      };

      const month = getMonthName(numberMonth);
      const cost = b.plan.cost;

      const index = a.findIndex((i) => {
        return i.month === month;
      });

      if (index === -1) {
        let obj = { month, Entrate: cost, Iscrizioni: 1 };

        a.push(obj);
      } else
        a[index] = {
          ...a[index],
          Entrate: a[index].Entrate + cost,
          Iscrizioni: a[index].Iscrizioni + 1,
        };

      return a;
    }, []);

    const chartData = data.map((item) => {
      const findMonth = months.find((obj) => obj.month === item.month);

      if (findMonth) {
        return findMonth;
      } else {
        return item;
      }
    });

    return res.status(200).json(chartData);
  } catch (error) {
    return res.status(500).json({ message: "Errore nell'ottenimento dati" });
  }
});

module.exports = app;
