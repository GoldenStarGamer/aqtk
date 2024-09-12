if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

document.getElementById("pbb").addEventListener("click", function() {
	window.location.href="pbb/";
});

document.getElementById("discord").addEventListener("click", function() {
	window.location.href = "https://discord.gg/8HnwPYQMM3";
});