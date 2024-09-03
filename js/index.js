const urlInstagram = "https://www.instagram.com/psi_katiatavares/"
const urlFacebook = "https://www.facebook.com/psi.katiatavares/?ref=pages_you_manage"

const svgInsta = document.querySelector("#svgInstagram")
const svgFacebook = document.querySelector("#svgFacebook")

function openInNewTab(urlInstagram){
    const win = window.open(urlInstagram,'_blank')
    win.focus()
}

svgInsta.addEventListener('click', () => {
    openInNewTab(urlInstagram)
})