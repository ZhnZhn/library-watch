
const _isFn = fn => typeof fn === "function";

const saveJsonToFile = (json, fileName) => {
  try {
    const _blob = new Blob([JSON.stringify(json)], {type: "application/json"})
    , a = document.createElement("a");

    a.href = URL.createObjectURL(_blob)
    a.rel = "noopener" // tabnabbing
    a.target = "_blank"
    a.download = fileName
    a.click()

    if (_isFn(URL.revokeObjectURL)) {
      URL.revokeObjectURL(a.href)
    }
    a.remove()
  } catch (err) {
    console.log(err.message)
  }
};

export default saveJsonToFile
