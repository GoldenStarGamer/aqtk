if (!firstImpression()) {
	document.getElementById("welcome").textContent="Welcome Back";
}

function linkbtn(id, link) {
  document.getElementById(id).addEventListener("click", () => window.location.href=link)
}

linkbtn("discord", "invite/")
linkbtn("peth", "peth/")

linkbtn("nets", "https://gitlab.com/arqitek/NetShaderc")
linkbtn("alk", "https://gitlab.com/arqitek/Alkata")
linkbtn("arq", "https://gitlab.com/arqitek/Arqeta")