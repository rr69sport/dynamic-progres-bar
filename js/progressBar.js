const form = document.getElementById('form')
const uploadFile = form.uploadFile
const progressFile = document.getElementById('progressFile');

uploadFile.addEventListener('change', (e) => {

    const file = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {

        progressFile.value = Number.parseInt(e.loaded * 100 / e.total)

        fileReader.addEventListener('loadend', (e) => {

            progressFile.value = 100
            console.log(e);
        })
    })

    form.addEventListener('reset', () => {
        progressFile.value = 0;
    })
})