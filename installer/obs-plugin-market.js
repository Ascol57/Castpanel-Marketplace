const fs = require('fs');
const path = require('path');

module.exports = {
    install: async () => {
        console.log('Installing OBS Plugin Market');
        try {
            await downloadFile("https://raw.githubusercontent.com/Ascol57/Castpanel-Marketplace/refs/heads/main/data/obs-plugin-market/market.js", path.join(__dirname, "../Shops/obs-plugin.js"));
            return true;
        } catch (error) {
            return false;
        }
    },
    uninstall: () => {
        console.log('Uninstalling OBS Plugin Market');
    },
    doUpdate: () => {
        console.log('Updating OBS Plugin Market');
    },
    launch: () => {
        console.log('Launching OBS Plugin Market');
    },
    info: {
        id: 'obs-plugin-market',
        name: 'OBS Plugin Market',
        logo: 'https://obsproject.com/assets/images/new_icon_small-r.png'
    }
};

const downloadFile = (async (url, fileName) => {
    const res = await fetch(url);
    if (!fs.existsSync("downloads")) await mkdir("downloads"); //Optional if you already have downloads directory
    const destination = path.resolve("./downloads", fileName);
    const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
});