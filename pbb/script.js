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
        return "https://drive.google.com/uc?id=1lwmEeyp5jfmYTtLKI9h-AS4uukiXa9n3";
    } else if (platform.includes("linux")) {
        // Check for ARM64
        if (platform.includes("arm64")) {
            return "https://drive.google.com/uc?id=1jSD3R_RBeYxhEaVYMYZP71SKGzS85cdf";
        }
        return "https://drive.google.com/uc?id=1PtcMTSPBO_Ekb-IVF18vAScjemueuFsf";
    } else {
        throw Error("PLATFORM NOT SUPPORTED");
    }
}