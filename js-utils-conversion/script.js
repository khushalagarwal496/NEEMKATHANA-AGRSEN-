// Utility functionality adapted for basic web demo

function checkStrLen(str, min_len, max_len) {
    if (!str) return false;
    var len = str.length;
    return len >= min_len && len <= max_len;
}

function IsNumberAlpha(str) {
    var regex = /^[0-9a-zA-Z]+$/;
    return regex.test(str);
}

function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    var t = "";
    for(var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}

// Test runner bindings
function testCheckStrLen() {
    var val = document.getElementById("testStrLen").value;
    var resStrLen = document.getElementById("resStrLen");
    
    // Simulate layer output styling
    var isPass = checkStrLen(val, 6, 20);
    resStrLen.innerHTML = isPass ? '<span class="success">Pass: String length OK!</span>' : '<span class="error">Error: Must be 6-20 chars.</span>';
}

function testIsNumberAlpha() {
    var val = document.getElementById("testAlpha").value;
    var resAlpha = document.getElementById("resAlpha");
    
    var isPass = IsNumberAlpha(val);
    resAlpha.innerHTML = isPass ? '<span class="success">Pass: Valid format!</span>' : '<span class="error">Error: Contains invalid characters.</span>';
}

function testFMoney() {
    var val = document.getElementById("testMoney").value;
    var resMoney = document.getElementById("resMoney");
    if (!val || isNaN(parseFloat(val))) {
        resMoney.innerHTML = '<span class="error">Invalid number</span>';
        return;
    }
    var money = fmoney(val, 2);
    resMoney.innerHTML = '<span class="success">Formatted: $' + money + '</span>';
}
