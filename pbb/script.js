document.getElementById('downloadBtn').addEventListener('click', function() {
	window.location.href = getDownloadLink();
});

document.getElementById("code").addEventListener("click", function() {
	window.location.href = "https://gitlab.com/arqitek/pbb/ProjectBadBot";
});

document.getElementById("fdev").addEventListener("click" , function() {
	window.location.href = "https://www.youtube.com/playlist?list=PLL4cl01Ww8_pj3QI4aqV0TLKQYX0J459J"
})

function getDownloadLink() {
    const platform = navigator.userAgent.toLowerCase();

    if (platform.includes("win")) {
        return "https://drive.google.com/uc?id=1Uo92Y6dSTVkQQf1d92PL4r_iFEO6RQ_s";
    } else if (platform.includes("linux")) {
        // Check for ARM64
        if (platform.includes("arm64")) {
            return "https://drive.google.com/uc?id=1JOZoTHNre3a8Yrpd_RfUOnfcQcyx-3TN";
        }
        return "https://drive.google.com/uc?id=1gynWaQX8wajyPtflNwLTHDXZmOaqtUpB";
    } else {
        throw Error("PLATFORM NOT SUPPORTED");
    }
}