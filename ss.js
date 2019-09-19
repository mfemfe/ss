
function destory() {
    $('html')['html']('عفواً ، لن يمكنك إستخدام الموقع .. هذا التوقف يحدث تلقائياً بعد العبث بحقوق ملكية التصميم ');
    setTimeout(function () {
        window['location']['assign']('https://mfe9.blogspot.com')
    }, 3000)
}
function redirect() {
    $('html')['html']('نأسف ولكن لا تملك رخصة إستخدام هذا القالب تواصل ما صاحب القالب <a href=\https://khamsat.com/designing/1172055-%D9%82%D8%A7%D9%84%D8%A8-%D9%85%D8%A7%D9%8A-%D8%B3%D9%8A%D9%88-myseo-template\>من هنا</a> للحصول على تفعيل القالب');
    setTimeout(function () {
        window['location']['assign']('https://mfe9.blogspot.com/')
    }, 2000e3)
}
var Loct = window['location']['hostname']['toLowerCase']();
var Link = window['location']['href']['toLowerCase']();
var Cont = '';
var Cont2 = '';
  Cont += '<a href=\'https://mfe9.blogspot.com\' target=\'_blank\'>تصميم : حورس</a>';
if ($('#powered')['length'] !== 0) {
    if (Loct['indexOf']('xfost') != -1) {
        $('#powered')['addClass']('impo')['append'](Cont2)
    } else {
        $('#powered')['addClass']('impo')['append'](Cont)
    };
    $('footer')['addClass']('impo');
    setInterval(function () {
        $('.impo')['each'](function () {
            if ($(this)['css']('opacity') < 1 || $(this)['css']('visibility') == 'hidden' || $(this)['is'](':hidden')) {
                destory()
            }
        })
    }, 3000)
} else {
    destory()
};
if (Link['indexOf']('post-preview') == -1 && Link['indexOf']('www.blogger') == -1 && Link['indexOf']('b/preview') == -1 && Link['indexOf']('template-editor') == -1 && Loct['indexOf']('mfe55.com') == -1 && Loct['indexOf']('mfe55.com') == -1 && Loct['indexOf']('mfe55.com') == -1) {
    redirect()
}

