if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

function linkbtn(id, link) {
  document.getElementById(id).addEventListener("click", () => window.location.href=link)
}

linkbtn("discord", "https://discord.gg/QTUURzPqYa")
linkbtn("peth", "peth/")