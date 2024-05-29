$(document).ready(function(){
    function animateWaves() {
        $('.wave').each(function(index) {
            var delay = (index + 1) * 1000; // Delay each wave by 1 second increments
            $(this).css({ 'left': '-50%' }).animate({ 'left': '50%' }, {
                duration: 2000,
                easing: 'linear',
                complete: animateWaves,
                queue: false
            }).delay(delay);
        });
    }

    animateWaves();
});
