module.exports = {
    info: {
        id: "obs-plugin",
        name: "OBS Plugin",
        description: "OBS Plugin Market",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    list: async (SharedComponents) => {
        try {
            response = response = await (await fetch('https://github.com/Ascol57/Castpanel-Marketplace/raw/refs/heads/main/obs-plugins.json')).json()
            return response;
        } catch (error) {
            return null;
        }
    }
}