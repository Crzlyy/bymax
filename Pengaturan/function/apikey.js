//=============== APIKEY ARIE PULSA ===============//
const ariekey = 'A6oVk48IJE4fjXRYoe2BDcFu6qEyvqhn' // INPUT API KEY https://ariepulsa.com
const nomorKu = '6289633533533@s.whatsapp.net' //Ganti Nomormu

//=============== SETTING PROFIT / UNTUNG ===============//
// SETTING KEUNTUNGAN MEMBER BERDASARKAN PERSEN (%)
// WAJIB BACA..!!!
// - Ketika Melakukan Perubahan Profit Member Silahkan Save Content
// - Lalu Restart Panel
// - Tunggu Panel Sampai Selesai Restart Atau Panel Aktif Kembali
// - Ketik di bot : updatelevel (untuk memperbarui profit terbaru member)
const prmember = '5'
const prgold = '4'
const prplatinum = '3'
const prpartner = '2'

//=============== APIKEY PAYDISINI ===============//
const keypaydis = 'a51e3550ae55bcce8af18e746dd17ef8'
const merchpaydis = '' //Kosongkan Jika Belum Verifikasi Merchant
const servpaydis = '11' //Buat 11 Jika Belum Verifikasi Merchant
const batas_time = '300'; //Batas waktu pembayaran (detik) minimal 1800 30 menit dan maximal 10800 3 jam
const fee_cus = '1'; //1 fee ditanggung customer 2 fee ditanggung merchant
const fee_owner = 350; //Fee Untuk Kamu Buat Meringankan Biaya Penarikan

module.exports = {
    ariekey,
    prmember,
    prgold,
    prplatinum,
    prpartner,
    keypaydis,
    merchpaydis,
    servpaydis,
    batas_time,
    fee_owner,
    fee_cus,
    nomorKu
}