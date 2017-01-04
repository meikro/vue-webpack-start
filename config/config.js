/**
 * Created by aresn on 16/7/18.
 */
import Env from './env';

let config = {
    env: Env,
    porxy:Env != 'production'?'.':'./api'
};
export default config;