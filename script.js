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
        'Windows (64-bit)': 'https://example.com/windows64.zip',
        'Linux (x86_64 (64-bit))': 'https://example.com/linux64.zip',
        'Linux (ARM 64-bit)': 'https://example.com/linux_arm64.zip',
    };

    return fileMapping[osInfo] || 'https://example.com/default.zip';
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
