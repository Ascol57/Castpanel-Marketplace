const { info } = require("console");

module.exports = {
    install: async () => {
        console.log('Installing OBS');
        setTimeout(() => {
            return 'OBS installed';
        }, 1000);
    },
    uninstall: () => {
        console.log('Uninstalling OBS');
    },
    doUpdate: () => {
        console.log('Updating OBS');
    },
    launch: () => {
        console.log('Launching OBS');
    },
    info: {
        id: 'obs',
        name: 'OBS Studio',
        logo: 'https://obsproject.com/assets/images/new_icon_small-r.png',
    }
};