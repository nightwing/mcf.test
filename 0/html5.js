define(function(require, exports, module) {
    main.consumes = ["Plugin", "dialog.error"];
    main.provides = ["clipboard.provider"];
    return main;

    /*
        Recommended Types:
        text/plain
        text/uri-list
        text/csv
        text/css
        text/html
        application/xhtml+xml
        image/png
        image/jpg, image/jpeg
        image/gif
        image/svg+xml
        application/xml, text/xml
        application/javascript
        application/json
        application/octet-stream
    */

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var showError = imports["dialog.error"].show;
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);

        var requested, nativeObject;
        
        var loaded = false;
        function load(){
            if (loaded) return false;
            loaded = true;
            
            // Chrome Specific
        }
        
        /***** Methods *****/
        
        function clear(){
            
        }
        
        function set(type, data, list) {}
            
        function get(type, full) {}
        
        function execCommand(commandName) {}
        
        function notSupported(type) {
            return !/text($|\/)/.test(type);
        }
        
        function convertType(type) {}
        
        function wrap(obj) {}
        
        function unwrap(){
            return window.clipboardData
        }
        
        /***** Lifecycle *****/
        
        plugin.on("load", function(){
            load();
        });
        plugin.on("enable", function(){
            
        });
        plugin.on("disable", function(){
            
        });
        plugin.on("unload", function(){
            loaded = false;
        });
        
        /***** Register and define API *****/
        
        /**
         * Implements the clipboard for a specific system. 
         * 
         * *N.B.: Cloud9 supports two native clipboard APIs. One for HTML5
         * browsers and one for node-webkit. If you are looking to add native
         * clipboard support for another system, reimplement this service.*
         * 
         * @singleton
         **/
        plugin.freezePublicAPI({
            /**
             * @ignore
             */
            wrap: wrap,
            /**
             * @ignore
             */
            unwrap: unwrap,
            
            /**
             * Clears the clipboard
             */
            clear: clear,
            
            /**
             * Sets the clipboard
             * @param {String}   type       The content type for this data. To be 
             *   compatible with the native clipboard for all platforms use "text".
             * @param {Mixed}    data       The actual data. This can be a string
             *   or a more complex object. Complex objects cannot be stored using
             *   the native clipboard.
             */
            set: set,
            
            /**
             * Gets the current value of the clipboard
             * @param {String}   type           The content type for this data. To be 
             *   compatible with the native clipboard for all platforms use "text".
             */
            get: get
        });
        
        register(null, {
            "clipboard.provider": plugin
        });
    }
})