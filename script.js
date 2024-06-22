// JavaScript para manejar el despliegue del submenu
document.addEventListener('DOMContentLoaded', function() {
    var submenus = document.querySelectorAll('.navbar-menu ul li');

    submenus.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function() {
            var submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});
