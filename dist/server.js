var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// src/math.js
var require_math = __commonJS({
  "src/math.js"(exports2, module2) {
    function add(a, b) {
      return a + b;
    }
    function subtract(a, b) {
      return a - b;
    }
    function multiply(a, b) {
      return a * b;
    }
    function calculateDiscount(price, percentage) {
      if (price < 0 || percentage < 0 || percentage > 100) {
        throw new Error("Invalid price or discount");
      }
      return price - price * percentage / 100;
    }
    module2.exports = {
      add,
      subtract,
      calculateDiscount,
      multiply
    };
  }
});

// src/app.js
var require_app = __commonJS({
  "src/app.js"(exports2, module2) {
    var express = require("express");
    var { add, multiply } = require_math();
    var app2 = express();
    app2.get("/health", (req, res) => {
      res.json({
        status: "UP",
        service: "jenkins-node-demo",
        version: process.env.APP_VERSION || "dev"
      });
    });
    app2.get("/api/add", (req, res) => {
      const a = Number(req.query.a);
      const b = Number(req.query.b);
      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({
          error: "a and b must be valid numbers"
        });
      }
      return res.json({
        result: add(a, b)
      });
    });
    app2.get("/api/multiply", (req, res) => {
      const a = Number(req.query.a);
      const b = Number(req.query.b);
      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({
          error: "a and b must be valid numbers"
        });
      }
      return res.json({
        result: multiply(a, b)
      });
    });
    module2.exports = app2;
  }
});

// src/server.js
var app = require_app();
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
