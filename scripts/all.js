$(function () {
    // 新品上市輪播
    $('.podcuct-swiper')
        .empty()
        .each(function(){
            // console.log();
            for (let i = 0; i < 10; i++) {
                let num=i+12;
                $(this).append(`
                    <div class="card">
                        <img src="https://picsum.photos/300/300/?random=${num}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text"><a href="#" class="text-decoration-none"><small
                                        class="text-muted">類別</small></a></p>
                            <h4 class="card-title">產品名稱</h4>
                            <p class="card-text text-secondary">NT$487</p>
                        </div>
                    </div>
                `)
                
            }
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint:768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
});