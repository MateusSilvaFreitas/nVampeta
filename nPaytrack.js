//nPaytrack 
(function ($) {

    var self = $.nPaytrack = new function () { };

    $.extend(self, {

        nPaytrackBackgrounds: [
            'http://www.away.com.br/nPaytrack/bg1.png'
        ],

        nPaytrackImgs: [
				'https://imgur.com/3pvaAVs',
				'https://imgur.com/Vxz0XM8',
				'https://imgur.com/LgnqXZB',
				'https://imgur.com/3LDvUnt',
				'https://imgur.com/y8vfz2n',
				'https://imgur.com/ZWBjNes',
				'https://imgur.com/krRfvJv',
				'https://imgur.com/oTVe3Bb',
				'https://imgur.com/bnj8wrG',
				'https://imgur.com/AFMAd0z',
				'https://imgur.com/ResWOYd',
				'https://imgur.com/JlSBoRp',
				'https://imgur.com/9dkX99m',
				'https://imgur.com/wYzRzWp',
				'https://imgur.com/PMtwKXL',
				'https://imgur.com/SuT4ZdU',
				'https://imgur.com/5CXTRLM',
				'https://imgur.com/delTSFR'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nPaytrackImgs, 3000);
        self.handleLogo(self.nPaytrackBackgrounds, 3000);
    });
})(jQuery);
