if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

document.getElementById("pbb").addEventListener("click", function() {
	window.location.href="pbb/";
});