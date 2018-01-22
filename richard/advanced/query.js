const $Dojo = function(obj_id) {
    return (function(){
        this.dom_el = document.getElementById(obj_id);

        this.click = function(callback) {
            this.dom_el.addEventListener("click", callback);
        };

        this.hover = function(hover_in, hover_out=hover_in){
            this.dom_el.addEventListener("mouseover", hover_in);
            this.dom_el.addEventListener("mouseout", hover_out);
        };

        return this;
    })();
};