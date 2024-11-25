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
    }
};