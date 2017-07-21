import development from './development';
import production from './production';

let  config = {};

const env = process.env.NODE_ENV ;
console.log('process',process.env)
console.log('process.env',env)

if('development' == env){

    config = Object.assign(config, development || {});

}else if('production' == env){

    config = Object.assign(config, production || {});

}

export default config ;