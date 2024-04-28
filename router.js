const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarProduk"), [BotController, "product"]);
router.menu(f("menu.marketingplan"), [BotController, "marketingplan"]);
router.menu(f("menu.wallet"), [BotController, "wallet"]);
router.menu(f("menu.isiwallet"), [BotController, "isiwallet"]);
router.menu(f("menu.alamatKantor"), [BotController, "alamatKantor"]);
router.keyword("*", [BotController, "introduction"]);

// KONSULTASI STATISTIK
router.menu(f("menu.k1"), [BotController, "marketingplan"]);

router.menu(f("menu.k1"), [BotController, "Bonus Matrix Plan X3 sebesar 80% omzet"]);
router.menu(f("menu.k2"), [BotController, "Bonus Matrix Plan X6 sebesar 80% omzet"]);
router.menu(f("menu.k3"), [BotController, "Bonus Dividend dari 20% omzet global"]);
router.menu(f("menu.k4"), [BotController, "Bonus Hiburan"]);
router.menu(f("menu.k5"), [BotController, "Bonus Web Support"]);

// ======= PEMBUKA & PENUTUP
router.keyword("hi*"[BotController, "introduction"]);
router.keyword("Hallo*"[BotController, "introduction"]);
router.keyword("Selamat*"[BotController, "introduction"]);
router.keyword("Asalam*"[BotController, "introduction"]);
router.keyword("ex", [BotController, "introduction"]);
router.menu(f("menu.exit"), [BotController, "introduction"]);



module.exports = router;