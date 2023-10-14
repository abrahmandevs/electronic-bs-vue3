const slug = {
    slugTxt(txt) {
        return txt.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
    }
}
export { slug }