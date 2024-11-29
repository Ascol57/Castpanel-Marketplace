module.exports = {
    install: async () => {
        console.log('Installing DefaultAPP');
        setTimeout(() => {
            return true;
        }, 1000);
    },
    uninstall: () => {
        console.log('Uninstalling DefaultAPP');
    },
    doUpdate: () => {
        console.log('Updating DefaultAPP');
    },
    launch: () => {
        console.log('Launching DefaultAPP');
    },
    info: {
        id: 'defaultapp',
        name: 'DefaultAPP',
        logo: 'https://obsproject.com/assets/images/new_icon_small-r.png'
    }
};