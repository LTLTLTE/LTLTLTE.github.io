$(document).ready(function() {
    var $cursorFollow = $('#cursor-follow');
    var mouseX = 0, mouseY = 0;
    var offsetX = 0, offsetY = 0;
    var distance = 40; // 蝴蝶距离鼠标的距离
    var shakeAmount = 1; // 抖动幅度

    // 更新鼠标位置
    $(document).on('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // 显示蝴蝶
        $cursorFollow.show();
    });

    function animate() {
        // 更新蝴蝶位置，添加偏移量
        offsetX += (mouseX - offsetX + distance) * 0.1; // 添加distance
        offsetY += (mouseY - offsetY + distance) * 0.1; // 添加distance

        // 添加抖动效果
        var shakeX = Math.random() * shakeAmount - shakeAmount / 2;
        var shakeY = Math.random() * shakeAmount - shakeAmount / 2;

        $cursorFollow.css({
            left: offsetX + shakeX,
            top: offsetY + shakeY
        });

        requestAnimationFrame(animate); // 循环调用
    }

    animate(); // 启动动画循环

    // 鼠标离开时隐藏蝴蝶
    $(document).on('mouseleave', function() {
        $cursorFollow.hide();
    });
});



