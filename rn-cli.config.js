module.exports={
    getTransformModulePath(){
        return require.resolve('react-native-typescrip-transformer')
    },

    getSourceExts(){
        return['ts','tsx'];
    }
}