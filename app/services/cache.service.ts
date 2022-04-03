import NodeCache from 'node-cache';

class Cache {

    cache: NodeCache;

    constructor(ttlSeconds) {
        this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });
    }

    get(key) {
        const value = this.cache.get(key);
        if (value) {
            return Promise.resolve(value);
        }

        return Promise.reject()
    }

    set(key, value) {
        this.cache.set(key, value);
    }
}


export default Cache;