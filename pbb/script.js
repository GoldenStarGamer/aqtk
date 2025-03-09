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
        return "https://drive.google.com/uc?id=1fB-AleSuIZxwTZ4bMQfadGFXZgerut76";
    } else if (platform.includes("linux")) {
        // Check for ARM64
        if (platform.includes("arm64")) {
            return "https://drive.google.com/uc?id=1-zj5WGS-piL6dy0HAJfr0bhZr35pB70o";
        }
        return "https://drive.google.com/uc?id=1trp8TPGjOlhKZ4MiTchlaFqIX-Uv_Bvd";
    } else {
        throw Error("PLATFORM NOT SUPPORTED");
    }
}