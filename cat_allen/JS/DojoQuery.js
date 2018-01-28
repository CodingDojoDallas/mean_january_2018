var $Dojo = (function() {
    return function(id) {
        this.element = document.getElementById(id)
        this.click = function(callback) {
            this.element.addEventListener('click', callback);
        }
        this.hover = function(hoverin, hoverout) {
            this.element.addEventListener('mouseover', hoverin);
            this.element.addEventListener('mouseout', hoverout);
        }
        return this;
    }
})();