if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

document.getElementById("pbb").addEventListener("click", function() {
	window.location.href="pbb/";
});

document.getElementById("discord").addEventListener("click", () =>

	window.location.href = "https://discord.gg/8HnwPYQMM3"
);

document.getElementById("launcher").addEventListener("click", () => 

	window.location.href = "https://github.com/GoldenStarGamer/ArqitekLauncher/releases/latest"
)