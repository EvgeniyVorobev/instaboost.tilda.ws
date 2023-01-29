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


            window.tildaForm.send = function (form, btnSubmit, formType, formKey) {
                form instanceof Element || (form = form[0]),
                btnSubmit instanceof Element || (btnSubmit = btnSubmit[0]);
                var allRecords = document.getElementById("allrecords")
                    , pageId = allRecords.getAttribute("data-tilda-page-id")
                    , projectId = allRecords.getAttribute("data-tilda-project-id")
                    , formId = form.getAttribute("id")
                    , dataFormCart = form.getAttribute("data-formcart");
                window.tildaForm.tildapayment = !1,
                ("y" === dataFormCart || form.closest(".t706__orderform")) && window.tildaForm.addPaymentInfoToForm(form);
                try {
                    window.mauser && window.tildaForm.addMebersInfoToForm(form)
                } catch (t) {
                }
                var inputItsGood = form.querySelector('input[name="form-spec-comments"]');
                if (inputItsGood || form.insertAdjacentHTML("beforeend", '<div style="position: absolute; left: -5000px; bottom: 0; display: none;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments" tabindex="-1" /></div>'),
                2 === formType || !formType && formKey) {
                    var tildaSpecs = {
                        "tildaspec-cookie": document.cookie,
                        "tildaspec-referer": window.location.href,
                        "tildaspec-formid": formId,
                        "tildaspec-formskey": formKey,
                        "tildaspec-version-lib": window.tildaForm.versionLib,
                        "tildaspec-pageid": pageId,
                        "tildaspec-projectid": projectId,
                        "tildaspec-lang": window.t_forms__lang
                    };
                    for (spec in tildaSpecs) {
                        var hiddenInput = form.querySelector('input[name="' + spec + '"]');
                        hiddenInput || (form.insertAdjacentHTML("beforeend", '<input type="hidden" name="' + spec + '" value="">'),
                            hiddenInput = form.querySelector('input[name="' + spec + '"]'),
                            hiddenInput.value = tildaSpecs[spec])
                    }
                    try {
                        hiddenInput = form.querySelector("input[name=tildaspec-fp]"),
                        hiddenInput || (form.insertAdjacentHTML("beforeend", '<input type="hidden" name="tildaspec-fp" value="">'),
                            hiddenInput = form.querySelector("input[name=tildaspec-fp]")),
                            window.tildastat ? hiddenInput.value = window.tildastat("fingerprint") : hiddenInput.value = "st" + window.pageYOffset + "w" + window.innerWidth + "h" + window.innerHeight + "ft" + form.getBoundingClientRect().top + window.pageYOffset
                    } catch (t) {
                    }
                    inputItsGood = form.querySelector(".js-form-spec-comments"),
                    inputItsGood && (inputItsGood.value = "");
                    var formUrl = "https://" + window.tildaForm.endpoint + "/procces/"
                        , dataForm = []
                        , arrFilter = [];
                    if (dataForm = t_serializeArray(form),
                        Array.prototype.forEach.call(dataForm, (function (t) {
                                -1 === t.name.indexOf("tildadelivery-") && arrFilter.push(t)
                            }
                        )),
                        dataForm = arrFilter,
                    window.tildaForm.tildapayment && window.tildaForm.tildapayment.products)
                        dataForm.push({
                            name: "tildapayment",
                            value: JSON.stringify(window.tildaForm.tildapayment)
                        });
                    else if (form.closest(".t706__orderform"))
                        return !1;
                    window.tildaForm.tildamember && window.tildaForm.tildamember.code && dataForm.push({
                        name: "tildamember",
                        value: JSON.stringify(window.tildaForm.tildamember)
                    }),
                        dataForm = t_forms__formData(dataForm);
                    var startRequest = Date.now();
                    t_triggerEvent(form, "tildaform:beforesend");
                    var xhr = new XMLHttpRequest;
                    return xhr.open("POST", formUrl, !0),
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                        xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"),
                        xhr.onreadystatechange = function () {
                            if (4 === xhr.readyState)
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    var data = xhr.responseText;
                                    if (data) {
                                        var objData = JSON.parse(data);
                                        if ("object" == typeof objData) {
                                            var dataSuccessUrl = form.getAttribute("data-success-url")
                                                , dataSuccessCallback = form.getAttribute("data-success-callback")
                                                ,
                                                dataFormSendedCallback = form.getAttribute("data-formsended-callback");
                                            if (t_removeClass(btnSubmit, "t-btn_sending"),
                                                btnSubmit.tildaSendingStatus = "0",
                                            objData && objData.error) {
                                                dataSuccessUrl = "",
                                                    dataSuccessCallback = "";
                                                var msgContainers = t_forms__getErrorContainers(form, "")
                                                    , errorBoxes = msgContainers.errorBoxes
                                                    , allError = msgContainers.allError;
                                                Array.prototype.forEach.call(allError, (function (t) {
                                                        t.style.display = "block"
                                                    }
                                                )),
                                                    Array.prototype.forEach.call(errorBoxes, (function (t) {
                                                            t.innerHTML = objData.error,
                                                                t.style.display = "block"
                                                        }
                                                    )),
                                                    t_addClass(form, "js-send-form-error"),
                                                    t_triggerEvent(form, "tildaform:aftererror"),
                                                window.t_cart__discounts && window.localStorage.removeItem("tcart_discounts")
                                            } else {
                                                if (objData && objData.needcaptcha)
                                                    return formKey ? void window.tildaForm.addTildaCaptcha(form, formKey) : void alert("Server busy. Please try again later.");
                                                var formResult = {};
                                                if (objData && objData.results && objData.results[0]) {
                                                    var strValue = objData.results[0];
                                                    strValue = strValue.split(":"),
                                                        formResult.tranId = strValue[0] + ":" + strValue[1],
                                                        formResult.orderId = strValue[2] ? strValue[2] : "0",
                                                    formResult.orderId && "0" !== formResult.orderId && (window.tildaForm.orderIdForStat = formResult.orderId)
                                                } else
                                                    formResult.tranId = "0",
                                                        formResult.orderId = "0";
                                                "undefined" != typeof jQuery && $(form).data("tildaformresult", formResult),
                                                    form.tildaTranId = formResult.tranId,
                                                    form.tildaOrderId = formResult.orderId;
                                                var dataEventName = form.getAttribute("data-tilda-event-name") || "";
                                                dataEventName || (dataEventName = "y" === dataFormCart && objData && (objData.next && objData.next.type && ("function" !== objData.next.type || objData.next.value && ("stripev3" === objData.next.value.sysname || "outersite" === objData.next.value.installation)) || !objData.next) ? "/tilda/" + formId + "/payment/" : "/tilda/" + formId + "/submitted/");
                                                var title = "Send data from form " + formId
                                                    , price = 0
                                                    , product = ""
                                                    , priceEl = form.querySelector(".js-tilda-price");
                                                if (window.Tilda && "function" == typeof window.Tilda.sendEventToStatistics) {
                                                    window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount ? (price = window.tildaForm.tildapayment.amount,
                                                    parseFloat(price) > 0 && (title = "Order " + formResult.orderId)) : priceEl && (price = priceEl.value,
                                                    parseFloat(price) > 0 && (title = "Order " + formResult.orderId));
                                                    try {
                                                        window.Tilda.sendEventToStatistics(dataEventName, title, product, price)
                                                    } catch (t) {
                                                        console.log("Error while sending statistics. Code status: ", t)
                                                    }
                                                    window.dataLayer && window.dataLayer.push({
                                                        event: "submit_" + formId
                                                    })
                                                } else {
                                                    try {
                                                        ga && "tilda" !== window.mainTracker && ga("send", {
                                                            hitType: "pageview",
                                                            page: dataEventName,
                                                            title: title
                                                        }),
                                                        window.mainMetrika && window[window.mainMetrika] && window[window.mainMetrika].hit(dataEventName, {
                                                            title: title,
                                                            referer: window.location.href
                                                        })
                                                    } catch (t) {
                                                        console.log("Error while sending main metrica. Code status: ", t)
                                                    }
                                                    window.dataLayer && window.dataLayer.push({
                                                        event: "submit_" + formId
                                                    })
                                                }
                                                try {
                                                    t_triggerEvent(form, "tildaform:aftersuccess"),
                                                        dataFormSendedCallback && "function" == typeof jQuery ? eval(dataFormSendedCallback + "($(form));") : dataFormSendedCallback && eval(dataFormSendedCallback + "(form);")
                                                } catch (t) {
                                                    console.log("Error while call success callback. Code status: ", t)
                                                }
                                                if (objData && objData.next && objData.next.type)
                                                    return window.tildaForm.payment(form, objData.next),



                                                        dataSuccessUrl = `https://hosted.transaction.cloud/payment/product/${parse_txt}?payload=${$(form).find('input[name="website"]').val()}`;
                                                        !1;
                                                window.tildaForm.successEnd(form, dataSuccessUrl, dataSuccessCallback)
                                            }
                                        }
                                    }
                                } else {
                                    var tsDelta = Date.now() - startRequest;
                                    t_removeClass(btnSubmit),
                                        btnSubmit.tildaSendingStatus = "0";
                                    var msgContainers = t_forms__getErrorContainers(form, "")
                                        , errorBoxes = msgContainers.errorBoxes
                                        , allError = msgContainers.allError;
                                    if (!xhr || 0 == xhr.status && tsDelta < 100)
                                        Array.prototype.forEach.call(allError, (function (t) {
                                                t.innerHTML = "Request error (sending form data). Please check internet connection..."
                                            }
                                        ));
                                    else {
                                        if (xhr && (xhr.status >= 500 || 408 == xhr.status || 410 == xhr.status || 429 == xhr.status || "timeout" == xhr.statusText) && -1 !== window.tildaForm.endpoint.indexOf("forms.tilda"))
                                            return window.tildaForm.endpoint = "forms2.tildacdn.com",
                                                window.tildaForm.send(form, btnSubmit, formType, formKey),
                                                !1;
                                        xhr && xhr.responseText ? Array.prototype.forEach.call(allError, (function (t) {
                                                t.innerHTML = "[" + xhr.status + "] " + xhr.responseText + ". Please, try again later."
                                            }
                                        )) : xhr && xhr.statusText ? Array.prototype.forEach.call(allError, (function (t) {
                                                t.innerHTML = "Error [" + xhr.status + ", " + xhr.statusText + "]. Please, try again later."
                                            }
                                        )) : Array.prototype.forEach.call(allError, (function (t) {
                                                t.innerHTML = "[" + xhr.status + "] Unknown error. Please, try again later."
                                            }
                                        ))
                                    }
                                    Array.prototype.forEach.call(allError, (function (t) {
                                            t.style.display = "block"
                                        }
                                    )),
                                        Array.prototype.forEach.call(errorBoxes, (function (t) {
                                                t.style.display = "block"
                                            }
                                        )),
                                        t_addClass(form, "js-send-form-error"),
                                        t_triggerEvent(form, "tildaform:aftererror")
                                }
                        }
                        ,
                        xhr.send(dataForm),
                        !1
                }
                if ("y" === form.getAttribute("data-is-formajax")) {
                    var dataForm = {};
                    dataForm = t_serializeArray(form),
                    window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount && dataForm.push({
                        name: "tildapayment",
                        value: JSON.stringify(window.tildaForm.tildapayment)
                    }),
                        dataForm = t_forms__formData(dataForm);
                    var xhr = new XMLHttpRequest;
                    return xhr.open("POST", form.getAttribute("action"), !0),
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                        xhr.setRequestHeader("Accept", "text/plain, */*; q=0.01"),
                        xhr.onreadystatechange = function () {
                            if (4 === xhr.readyState)
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    var t = form.querySelector(".js-successbox"),
                                        e = form.getAttribute("data-success-url"),
                                        r = form.getAttribute("data-success-callback"), o;
                                    if (t_removeClass(btnSubmit, "t-btn_sending"),
                                        btnSubmit.tildaSendingStatus = "0",
                                        o = xhr.responseText)
                                        if ("{" == o.substring(0, 1)) {
                                            var a = JSON.parse(o);
                                            if ("object" == typeof a)
                                                if (a && a.message && "OK" !== a.message)
                                                    t.innerHTML = a.message;
                                                else if (a && a.error) {
                                                    var n,
                                                        i = (n = t_forms__getErrorContainers(form, "Unknown error. Please, try again later.")).errorBoxes,
                                                        s = n.allError;
                                                    return Array.prototype.forEach.call(s, (function (t) {
                                                            t.style.display = "block",
                                                                t.innerHTML = a.error
                                                        }
                                                    )),
                                                        Array.prototype.forEach.call(i, (function (t) {
                                                                t.style.display = "block"
                                                            }
                                                        )),
                                                        t_addClass(form, "js-send-form-error"),
                                                        t_triggerEvent(form, "tildaform:aftererror"),
                                                        !1
                                                }
                                        } else
                                            t.innerHTML = o,
                                                t_parseScripts(t, "");
                                    var l = "/tilda/" + formId + "/submitted/"
                                        , d = "Send data from form " + formId;
                                    window.Tilda && "function" == typeof window.Tilda.sendEventToStatistics ? window.Tilda.sendEventToStatistics(l, d, "", 0) : "undefined" != typeof ga && "tilda" !== window.mainTracker ? ga("send", {
                                        hitType: "pageview",
                                        page: l,
                                        title: d
                                    }) : window.mainMetrika > "" && window[window.mainMetrika] && window[window.mainMetrika].hit(l, {
                                        title: d,
                                        referer: window.location.href
                                    }),
                                        window.tildaForm.successEnd(form, e, r)
                                } else {
                                    t_removeClass(btnSubmit, "t-btn_sending"),
                                        btnSubmit.tildaSendingStatus = "0";
                                    var n, i = (n = t_forms__getErrorContainers(form, "")).errorBoxes, s = n.allError,
                                        o = xhr.responseText;
                                    Array.prototype.forEach.call(s, (function (t) {
                                            o ? t.innerHTML = o + ". Please, try again later. [" + xhr.status + "]" : xhr.statusText ? t.innerHTML = "Error [" + xhr.statusText + "]. Please, try again later. [" + xhr.status + "]" : t.innerHTML = "Unknown error. Please, try again later. [" + xhr.status + "]",
                                                t.style.display = "block"
                                        }
                                    )),
                                        Array.prototype.forEach.call(i, (function (t) {
                                                t.style.display = "block"
                                            }
                                        )),
                                        t_addClass(form, "js-send-form-error"),
                                        t_triggerEvent(form, "tildaform:aftererror")
                                }
                        }
                        ,
                        xhr.send(dataForm),
                        !1
                }
                return -1 == form.getAttribute("action").indexOf(window.tildaForm.endpoint) && (t_removeClass(btnSubmit, "t-btn_sending"),
                    btnSubmit.tildaSendingStatus = "3",
                    form.submit(),
                    !0)
            }
                clearInterval(it);
        }
    },500)
