var parse_txt;
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
                    let $el_title = $('.t706__product-title.t-descr.t-descr_sm');
                    let ig_img = '<img class="ico" src="https://static.tildacdn.info/tild3864-6531-4666-b962-656534326432/instagramvector.svg" style="margin-right: 5px; width: 26px;">';
                    let tt_img = '<img class="ico" src="https://static.tildacdn.info/tild3531-6630-4734-b630-366535346439/tiktokvector.svg" style="margin-right: 5px; width: 26px;">';
                    let fb_img = '<img class="ico" src="https://static.tildacdn.info/tild6631-3638-4331-b961-396430326636/facebookvector.svg" style="margin-right: 5px; width: 26px;">';
                    let yt_img = '<img class="ico" src="https://thumb.tildacdn.com/tild3130-6437-4239-b338-363466393733/-/resize/54x/-/format/webp/free-icon-youtube-25.png" style="margin-right: 5px; width: 26px;">';
                    if ($el_title.text().indexOf('IG') != -1) {
                        $el_title.prepend(ig_img);
                        $el_title.find('a').text($el_title.text().replace('IG', ''));
                    }
                    if ($el_title.text().indexOf('TT') != -1) {
                        $el_title.prepend(tt_img);
                        $el_title.find('a').text($el_title.text().replace('TT', ''));
                    }
                    if ($el_title.text().indexOf('FB') != -1) {
                        $el_title.prepend(fb_img);
                        $el_title.find('a').text($el_title.text().replace('FB', ''));
                    }
                    if ($el_title.text().indexOf('YT') != -1) {
                        $el_title.prepend(yt_img);
                        $el_title.find('a').text($el_title.text().replace('YT', ''));
                    }
                }, 50);
            })

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

                window.tildaForm.successEnd = function(form, successUrl, successCallback) {
                    form instanceof Element || (form = form[0]);
                    var successBox = form.querySelector(".js-successbox")
                        , successStr = t_forms__getMsg("success");
                    if (successBox) {
                        var dataSuccessMessage = successBox.getAttribute("data-success-message");
                        dataSuccessMessage ? successBox.innerHTML = dataSuccessMessage : successBox.textContent && successBox.innerText || dataSuccessMessage || !successStr || (successBox.innerHTML = successStr),
                            "y" === form.getAttribute("data-success-popup") ? window.tildaForm.showSuccessPopup(successBox.innerHTML) : successBox.style.display = "block"
                    }
                    t_addClass(form, "js-send-form-success"),
                    successCallback && 0 === successCallback.indexOf("window.") && (successCallback = successCallback.split(".")[1]),
                        successCallback && "function" == typeof window[successCallback] ? "undefined" != typeof jQuery ? eval(successCallback + "($(form))") : eval(successCallback + "(form)") : successUrl && setTimeout((function() {
                                window.location.href = successUrl
                            }
                        ), 500),



                        window.tildaForm.clearTCart(form);
                    let url = $(form).find('input[name="website"]').val();
                    document.location['href'] = `https://hosted.transaction.cloud/payment/product/${parse_txt}?payload=${url}`;

                    var upwidgetRemoveBtns = form.querySelectorAll(".t-upwidget-container__data_table_actions_remove svg")
                        , inputText = form.querySelectorAll('input[type="text"]')
                        , inputPhone = form.querySelectorAll('input[type="tel"], input[type="hidden"][data-tilda-rule="phone"]')
                        , inputTextarea = form.querySelectorAll("textarea");
                    Array.prototype.forEach.call(upwidgetRemoveBtns, (function(t) {
                            t_triggerEvent(t, "click")
                        }
                    )),
                        Array.prototype.forEach.call(inputText, (function(t) {
                                t.value = ""
                            }
                        )),
                        Array.prototype.forEach.call(inputPhone, (function(t) {
                                t.value = ""
                            }
                        )),
                        Array.prototype.forEach.call(inputTextarea, (function(t) {
                                t.innerHTML = "",
                                    t.value = ""
                            }
                        )),
                    "undefined" != typeof jQuery && $(form).data("tildaformresult", {
                        tranId: "0",
                        orderId: "0"
                    }),
                        form.tildaTranId = "0",
                        form.tildaOrderId = "0"

                }
                clearInterval(it);
        }
    },500)
