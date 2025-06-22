if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

function linkbtn(id, link) {
  document.getElementById(id).addEventListener("click", () => window.location.href=link)
}

linkbtn("discord", "https://discord.gg/pMRmc2uF64")
linkbtn("peth", "peth/")