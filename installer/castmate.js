const fs = require("fs");
const { mkdir } = require("fs/promises");
const { Readable } = require('stream');
const { finished } = require('stream/promises');
const path = require("path");

module.exports = {
    install: async () => {
        console.log('Installing Castmate');
        fs.mkdirSync(path.join(__dirname, "CastMate"));
        await downloadFile("https://github.com/LordTocs/CastMate/releases/download/v0.5.3/CastMate_0.5.3-portable.exe", path.join(__dirname, "CastMate/Castmate.exe"))
        console.log('Castmate installed');
        return 'Castmate installed';
    },
    uninstall: () => {
        console.log('Uninstalling Castmate');
    },
    doUpdate: () => {
        console.log('Updating Castmate');
    },
    launch: () => {
        console.log('Launching Castmate');
    },
    info: {
        name: 'Castmate',
        logo: 'https://www.castmate.io/_nuxt/castmate-logo.14278982.svg',
    }
};

const downloadFile = (async (url, fileName) => {
    const res = await fetch(url);
    if (!fs.existsSync("downloads")) await mkdir("downloads"); //Optional if you already have downloads directory
    const destination = path.resolve("./downloads", fileName);
    const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
});