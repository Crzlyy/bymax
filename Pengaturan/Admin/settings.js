const chalk = require("chalk")
const fs = require("fs")

//______________________[ PERLENGKAPAN ]_______________________//
global.owner = '6289633533533' //Ganti Jadi No Lu
global.ownerku = ['6289633533533']
global.ownerNomor = '6289633533533'
global.botname = 'BYMAX' //Ganti Jadi Nama Bot Lu
global.namabot = 'BYMAX' 
global.ownername = 'BYMAX' 
global.ownerName = 'arifmuhamadddd_' //Ganti Jadi Nama Lu
global.footer = 'BymaxStore'
global.packname = `BymaxStore` 
global.struk = `Max` 
global.toko = `©BymaxStore`
global.youtube = `@Crazylolli`
global.sessionName = `session` //Jangan Diganti Ini Untuk Nama Folder Session
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.antilink = false

//______________________[ THUMBNAIL ]_______________________//
global.qris = fs.readFileSync("./image/qris.png") //Sesuaikan Dengan Nama Gambar Qris Di Folder Image

//______________________[ GC MEMBER ]_______________________//
global.gcresmi = '#' //Ganti Dengan Link Groupmu

//______________________[ DATA REKENING ]_______________________//
global.rekening = `

》 *SCAN QRIS HANYA UNTUK DANA SELAIN DANA UANG AKAN DITAHAN 1x24 JAM*

》 Silahkan Transfer Ke Salah Satu Rekening
》 DANA/SHOPEE/GOPAY : 0889633533533
》 *ATAS NAMA : M Arif xx*

`

//______________________[ INFO UPLEVEL ]_______________________//
global.hargalevel = `Keuntungan UPLEVEL Kamu Akan Mendapatkan Harga Special Dan Yang Pasti Lebih Murah.
Khusus Level Partner Akan Mendapatkan Pelayanan Khsusus Dari Kami.

LIST BIAYA UPLEVEL :
*GOLD : Rp 50.000*
*PLATINUM : Rp 100.000*
*PARTNER : Rp 150.000*
`

global.mess = {
    wait: 'Sedang DiProses',
    succes: 'Sukses',
    admin: 'Layanan Khsusus Admin',
    botAdmin: 'BOT Harus Jadi Admin',
    owner: 'Layanan Khusus Owner',
    group: 'Hanya Bisa Didalam Group',
    private: 'Silahkan Private Chat Dengan BOT',
    bot: 'Fitur Special BOT',
    error: 'Layanan Error',    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})