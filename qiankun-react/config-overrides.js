/*
 * @Description: 
 * @Autor: tianzhen
 * @Date: 2021-04-11 19:48:54
 */
module.exports = {
    webpack:(config)=>{
        config.output.library = 'reactapp';
        config.output.libraryTarget = 'umd';
        // config.output.publicPath = 'http://localhost:20000/';
        return config
    },
    devServer:(configFunction)=>{
        return function(proxy,allowedHost){
            const config = configFunction(proxy,allowedHost);
            config.headers = {
                'Access-Control-Allow-origin':'*'
            }
            return config
        }
    }
}