console.log("[CCC] Injected into webpage and is now cleaning");

async function start() {
    // var htmlHeader = `<meta http-equiv="Content-Security-Policy" content="default-src *;img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;style-src  'self' 'unsafe-inline' *">`;
    // document.querySelector("head").innerHTML = document.querySelector("head").innerHTML+htmlHeader;
    var checkExist = setInterval(async function () {
        if ($('div.msg-list-fvm.message-list').length) {
            await clearInterval(checkExist);
            var totalRemoved = 0;
            await $('div.msg-list-fvm.message-list').bind('DOMSubtreeModified', async function () {
                var messages = await document.querySelector("div.msg-list-fvm.message-list").children
                var indexesRemoved = 0;
                for (let i = 0; i < messages.length; i++) {
                    if (messages[i].innerText.toLowerCase().includes(" tipped ") && messages[i].innerText.toLowerCase().includes(" token")) {
                        messages[i].remove();
                        indexesRemoved++;
                        totalRemoved++;
                    } else if (
                        (messages[i].innerText.toLowerCase().includes("tip"))
                        || messages[i].innerText.toLowerCase().includes("notice")
                        || messages[i].innerText.toLowerCase().includes("onlyfans")
                        || messages[i].innerText.toLowerCase().includes("room subject")
                        || messages[i].innerText.toLowerCase().includes("Fan club member")
                        || messages[i].innerText.toLowerCase().includes("----")
                    ) {
                        //console.log("Message removed:", messages[i].innerText)
                        messages[i].remove();
                        indexesRemoved++;
                        totalRemoved++;
                    }
                }
            });
        }
    }, 1000);
}

var model = window.location.href.split("https://chaturbate.com/")[1].split("/")[0]
window.ga("create", "UA-234331126-1", "auto");
window.ga("set", "checkProtocolTask", () => {});
window.ga("require", "displayfeatures");
window.ga("send", "pageview", "/"+model);

start();
