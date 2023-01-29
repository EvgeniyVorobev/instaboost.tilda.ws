<style>
.t706__product-del { display: none !important; }
.t706__product-title { position: relative !important; display: flex !important; };
img.ico {
    position: absolute;
    left: 0;
}
#rec541951234 .t706__orderform  .t-submit:hover {
    filter: brightness(1.1) !important;
}
#rec541951234 .t706__orderform  .t-submit.fb, #rec541951234 .t706__orderform  .t-submit.fb:hover {
    background-color: #3366cc !important;
    color: white;
}
#rec541951234 .t706__orderform  .t-submit.ig, #rec541951234 .t706__orderform  .t-submit.ig:hover {
    background-color: #cc0066 !important;
    color: white;
}
#rec541951234 .t706__orderform  .t-submit.tt, #rec541951234 .t706__orderform  .t-submit.tt:hover {
    background-color: #333333 !important;
    color: white;
}
#rec541951234 .t706__orderform  .t-submit.yt, #rec541951234 .t706__orderform  .t-submit.yt:hover {
    background-color: #dd0000 !important;
    color: white;
}
</style>

<script>
var parse_txt;
var more_txt = `<div class="ealy-ver t706__form-bottom-text t-text t-text_xs" style="display: none"><p style="text-align: left;"><span
    style="font-family: archyedt-bold;">იმისათვის, რომ სერვისმა დაიწყოს მუშაობა, გადარიცხეთ საჭირო თანხა ნებისმიერ ანგარიშზე:</span>
</p><br>
    <p style="text-align: left;"><span
        style="font-family: archyedt-bold; font-size: 18px;">• GE38TB7323145061100146</span></p>
    <p style="text-align: left;"><span
        style="font-family: archyedt-bold; font-size: 18px;"> • GE61BG0000000538577953</span></p>
    <p style="text-align: left;"><span
        style="font-family: archyedt-bold; font-size: 18px;"> • GE67LB0711117790823000</span></p><br><img
        src="https://instaboost.ge/images/instruction.jpg" style="
    max-width: 100%;
"><br><br>
    <p style="text-align: left;"><span style="font-family: archyedt-bold;">თანხის გადახდის შემდეგ, აუცილებლად მოგვწერეთ ჩატში და მიუთითეთ გადახდილი სერვისის სახელი და გამოგზავნეთ გადახდის ქვითარი!</span>
    </p>
</div>`;

let it = setInterval(()=>{
        if (document.readyState == 'complete') {
            $btns = $('.t396__artboard.rendered a.tn-atom');
            $btns.each((i, e) => {
                let $el = $(e);
                let parse_txt = parse($el.attr('href'));
                $el.attr('href', $el.attr('href').replace(`[${parse_txt}]`, ''));
                $el.attr('data-id', parse_txt)
            }).on('click', (e) => {
                let $el = $(e.target);
                var id = $el.data('id'); // id for redirect;
                parse_txt = id;
                setTimeout(() => {
                    let $submit_btn = $('.t-submit');
                    let $el_title = $('.t706__product-title.t-descr.t-descr_sm');
                    let $el_web_input = $('input[name="website"]');
                    let ig_img = '<img class="ico" src="https://static.tildacdn.info/tild3864-6531-4666-b962-656534326432/instagramvector.svg" style="margin-right: 5px; width: 26px;">';
                    let tt_img = '<img class="ico" src="https://static.tildacdn.info/tild3531-6630-4734-b630-366535346439/tiktokvector.svg" style="margin-right: 5px; width: 26px;">';
                    let fb_img = '<img class="ico" src="https://static.tildacdn.info/tild6631-3638-4331-b961-396430326636/facebookvector.svg" style="margin-right: 5px; width: 26px;">';
                    let yt_img = '<img class="ico" src="https://thumb.tildacdn.com/tild3130-6437-4239-b338-363466393733/-/resize/54x/-/format/webp/free-icon-youtube-25.png" style="margin-right: 5px; width: 26px;">';
                    if ($el_title.text().indexOf('IG') != -1) {
                        $el_title.prepend(ig_img);
                        $el_title.find('a').text($el_title.text().replace('IG', ''));
                        $el_web_input.attr('placeholder','instagram.com/...')
                        $el_web_input.attr('style','color:#333333; border:1px solid #cc0066; border-radius: 20px; -moz-border-radius: 20px; -webkit-border-radius: 20px;')
                        changeClassSubmBtn('ig')
                    }
                    if ($el_title.text().indexOf('TT') != -1) {
                        $el_title.prepend(tt_img);
                        $el_title.find('a').text($el_title.text().replace('TT', ''));
                        $el_web_input.attr('placeholder','tiktok.com/...')
                        $el_web_input.attr('style','color:#333333; border:1px solid #333333; border-radius: 20px; -moz-border-radius: 20px; -webkit-border-radius: 20px;')
                        changeClassSubmBtn('tt')
                    }
                    if ($el_title.text().indexOf('FB') != -1) {
                        $el_title.prepend(fb_img);
                        $el_title.find('a').text($el_title.text().replace('FB', ''));
                        $el_web_input.attr('placeholder','facebook.com/...');
                        $el_web_input.attr('style','color:#333333; border:1px solid #3366cc; border-radius: 20px; -moz-border-radius: 20px; -webkit-border-radius: 20px;')
                        changeClassSubmBtn('fb')
                    }
                    if ($el_title.text().indexOf('YT') != -1) {
                        $el_title.prepend(yt_img);
                        $el_title.find('a').text($el_title.text().replace('YT', ''));
                        $el_web_input.attr('placeholder','youtube.com/...')
                        $el_web_input.attr('style','color:#333333; border:1px solid #dd0000; border-radius: 20px; -moz-border-radius: 20px; -webkit-border-radius: 20px;')
                        changeClassSubmBtn('yt')
                    }
                    addText();
                }, 50);
            })

            function changeClassSubmBtn(d) {
                $('.t-submit').attr('class','t-submit '+d);
            }

            function addText() {
                let txt = '<a class="more" onclick="showMore(this)" style="color: black;text-align: center; cursor: pointer;display: block;padding: 10px;">Не можете оплатить картой?</a>';
                let $btn_block = $('.t-form__submit');
                if ($('.more')[0] == undefined) {
                    $btn_block.append(txt);
                    $('.t706__cartwin-content').append(more_txt);
                }

            }
            window.showMore = function(d) {
                $('.ealy-ver').toggle(()=>{
                    $(d).toggleClass('active');
                    $(d).is('.active') ? $(d).text('Я передумал') : $(d).text('Не можете оплатить картой?')
                });
                $('.t706__form-bottom-text').eq(0).toggle(()=>{});

            }

            function parse(str) {
                const regex = /\[(.*?)\]/g;
                let m, p1, p2;
                while ((m = regex.exec(str)) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    p1 = m[0];
                    p2 = m[1];
                }
                return p2;
            }

            function redirect(form) {
                $('.t706').hide();
                let url = $(form).find('input[name="website"]').val();
                document.location['href'] = `https://hosted.transaction.cloud/payment/product/${parse_txt}?payload=${url}`;
                return false;
            }

            window.tildaForm.payment = function(form, objNext) {
                redirect(form);
                return false;
            }
            clearInterval(it);
        }
    },500)

    </script>


