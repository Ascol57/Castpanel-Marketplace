module.exports = {
    install: async () => {
        console.log('Installing Castmate');
        setTimeout(() => {
            return 'Castmate installed';
        }, 1000);
    },
    uninstall: () => {
        console.log('Uninstalling Castmate');
    },
    doUpdate: () => {
        console.log('Updating Castmate');
    }
};