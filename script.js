function getOSInfo() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;

    const isWindows = /Win/.test(platform);
    const isLinux = /Linux/.test(platform) || /X11/.test(platform);

    let architecture = '';
    if (isWindows) {
        architecture = /WOW64|Win64|x64/.test(userAgent) ? '64-bit' : '32-bit';
        return `Windows (${architecture})`;
    }

    if (isLinux) {
        if (/aarch64|armv8|armv7/.test(userAgent)) {
            architecture = 'ARM 64-bit';
        } else if (/x86_64/.test(userAgent) || /amd64/.test(userAgent)) {
            architecture = 'x86_64 (64-bit)';
        } else {
            architecture = 'Unknown architecture';
        }
        return `Linux (${architecture})`;
    }

    return 'Unknown OS';
}

function getDownloadURL() {
    const osInfo = getOSInfo();

    const fileMapping = {
        'Windows (64-bit)': 'https://drive.google.com/uc?export=download&id=1Uo92Y6dSTVkQQf1d92PL4r_iFEO6RQ_s',
        'Linux (x86_64 (64-bit))': 'https://drive.google.com/uc?export=download&id=1JOZoTHNre3a8Yrpd_RfUOnfcQcyx-3TN',
        'Linux (ARM 64-bit)': 'https://drive.google.com/uc?export=download&id=1gynWaQX8wajyPtflNwLTHDXZmOaqtUpB',
    };

    return fileMapping[osInfo] || '';
}

function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const downloadUrl = getDownloadURL();
    const filename = downloadUrl.split('/').pop(); // Extract the filename from the URL
    downloadFile(downloadUrl, filename);
});

document.getElementById("discord").addEventListener("click", function() {
	window.location.href = "https://discord.gg/8HnwPYQMM3";
});

document.getElementById("code").addEventListener("click", function() {
	window.location.href = "https://gitlab.com/grstarman/ProjectBadBot";
});
