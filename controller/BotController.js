const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarProduk"),
          f("menu.marketingplan"),
          f("menu.wallet"),
          f("menu.isiwallet"),
          f("menu.alamatKantor"),
          f("menu.exit")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }
// PANDUAN KONSULTASI STATISTIK 
async marketingplan(request) {
  return Response.menu.fromArrayOfString(
      [
        f("menu.k1"),
        f("menu.k2"),
        f("menu.k3"),
        f("menu.k4"),
        f("menu.k5"),
        f("menu.exit")
      ],
      f("intromarketingplan", [request.name]),
      f("template.menu")
    );
}

    async product(request) {
      return Response.image.fromURL("./image/logo-or-header/apamaticfortune.jpg","*Apa itu Matic Fortune?*\n \nVideo ini akan memberi gambaran singkat bagi anda https://youtu.be/3dCt_vDC8Vg?feature=shared\n• Ketik *ex* untuk keluar",
      )
    }
    async MarketingPlan(request) {
      return Response.image.fromURL("./image/logo-or-header/mp.jpg","*Marketing Plan Matic Fortune📲*\n \nIni adalah plan pemasaran yang sangat sederhana, tetapi sangat menarik dan power full, karena 100% omzet masuk platform dibagikan kembali menjadi bonus; \n80% sebagai Bonus Matrix (aktive dan pasif) dan 20% sebagai Bonus Dividend (pasif) bagi seluruh pengguna platform!!\n \nPernahkah anda mendengar ada platform yang membagikan kembali seluruh omzetnya secara realtime saat ada omzet masuk tanpa penundaan sama sekali??\n \nSimak videonya disini https://youtu.be/m7RNj5iTTtk?feature=shared \n• Ketik *ex* untuk keluar",
      )
    }
     // --------- FUNCTION BUKAN MENU

     async MarketingPlan(request) {
      return Response.image.fromURL("./image/logo-or-header/mp.jpg","*Marketing Plan Matic Fortune📲*\n \nIni adalah plan pemasaran yang sangat sederhana, tetapi sangat menarik dan power full, karena 100% omzet masuk platform dibagikan kembali menjadi bonus; \n80% sebagai Bonus Matrix (aktive dan pasif) dan 20% sebagai Bonus Dividend (pasif) bagi seluruh pengguna platform!!\n \nPernahkah anda mendengar ada platform yang membagikan kembali seluruh omzetnya secara realtime saat ada omzet masuk tanpa penundaan sama sekali??\n \nSimak videonya disini https://youtu.be/m7RNj5iTTtk?feature=shared \n• Ketik *ex* untuk keluar",
      )
    }

     async k1Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/matixx3.jpg","*Bonus Matrix Plan X3 sebesar 80% omzet*\n \n• Ketik *ex* untuk keluar")
    }
    async k2Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/matixx3.jpg","*Bonus Matrix Plan X6 sebesar 80% omzet*\n \n• Ketik *ex* untuk keluar")
    }
    async k3Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/devidend.jpg","*Bonus Dividend 20% omzet* \n\n• Ketik *ex* untuk keluar")
    }
    async k4Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-4.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k5Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-5.png","*Daftar Jenis & Tarif Penerimaan Negara Bukan Pajak BPS* \nBerdasarkan Peraturan Pemerintah No.7 Tahun 2015 \n\n• Keluar *[ex]*")
    }

    async wallet(request) {
      return Response.image.fromURL("./image/logo-or-header/safepal.jpg","*Install dan Set Up Dompet Kripto📲*\n \nSilahkan kunjungi link ini untuk panduan lengkapnya: https://s.id/registerdanupgrade\n• Ketik *ex* untuk keluar", )
    }
    async isiwallet(request) {
      return Response.image.fromURL("./image/logo-or-header/register.jpg","\n*Cara Pengisian Coin dan Pendaftaran💵*\n \nSilahkan buka panduannya pada link ini : https://s.id/regmaticfortunesafepal\n \nSetelah dompet anda terisi coin sejumlah yang dibutuhkan, silakan tempel salah satu link ini pada DApps Browser dompet anda (SafePal, Token Pockets, Trust Wallet,Meta Mask); \n1. https://zpj0pv9eujyzfutfls8muw.on.drv.tw/maticfortune.pro/?ref=0x80919571823F19B993804aAEa4f46df6A6cD8E1F\n2. https://demobbank.github.io/maticfortune.pro/?ref=0x80919571823F19B993804aAEa4f46df6A6cD8E1F\n3. https://maticfortunepro.000webhostapp.com/?ref=0x80919571823F19B993804aAEa4f46df6A6cD8E1F\n4. https://maticfortuneglobal.github.io/pro/?ref=0x80919571823F19B993804aAEa4f46df6A6cD8E1F\n \nUPGRADE harus dilakukan secara berurutan, agar tidak  salah upgrade sehingga akun jadi bermasalah silakan hubungi htpps://wa.me/6285640955687 untuk panduan upgrade \n• Ketik *ex* untuk keluar",
      )
    }
    async alamatKantor(request) {
      return Response.image.fromURL("./image/logo-or-header/support.jpg","*Support dan Pengembangan👨‍👩‍👧‍👦*\n \nAnda dapat menghubungi pemilik web support ini melalui : htpps://wa.me/6285640955687 \n• Ketik *ex* untuk keluar")
    }

    // --------- FUNCTION BUKAN MENU
    async marketingplan(request) {
      return Response.image.fromURL("./image/logo-or-header/mp.jpg","*Marketing Plan Matic Fortune📲*\n \nIni adalah plan pemasaran yang sangat sederhana, tetapi sangat menarik dan power full, karena 100% omzet masuk platform dibagikan kembali menjadi bonus; \n80% sebagai Bonus Matrix (aktive dan pasif) dan 20% sebagai Bonus Dividend (pasif) bagi seluruh pengguna platform!!\n \nPernahkah anda mendengar ada platform yang membagikan kembali seluruh omzetnya secara realtime saat ada omzet masuk tanpa penundaan sama sekali??\n \nSimak videonya disini https://youtu.be/m7RNj5iTTtk?feature=shared \n• Ketik *ex* untuk keluar",
      )
    }

    // KONSULTASI STATISTIK
    async k1Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-1.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k2Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-2.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k3Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-3.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k4Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-4.png","*Panduan Layanan Konsultasi Statistik Online Maupun Offline* \n\n• Ketik *ex* untuk keluar")
    }
    async k5Menu(request) {
      return Response.image.fromURL("./image/logo-or-header/konsul-5.png","*Daftar Jenis & Tarif Penerimaan Negara Bukan Pajak BPS* \nBerdasarkan Peraturan Pemerintah No.7 Tahun 2015 \n\n• Keluar *[ex]*")
    }

}