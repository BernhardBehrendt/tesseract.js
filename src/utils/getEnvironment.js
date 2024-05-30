module.exports = (key) => {
    const env = {};

    env.type = 'node';

    if (typeof key === 'undefined') {
        return env;
    }

    return env[key];
};
