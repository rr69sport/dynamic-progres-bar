const form = document.getElementById('form')
const uploadFile = form.uploadFile

const rootStyles = document.documentElement.style

uploadFile.addEventListener('change', (e) => {

    const file = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {

        rootStyles.setProperty('--width_bar', `${Number.parseInt(e.loaded * 100 / e.total)}%`)

        fileReader.addEventListener('loadend', (e) => {

            rootStyles.setProperty('--width_bar', `${Number.parseInt(100)}%`)
            console.log(e);
        })
    })

    form.addEventListener('reset', () => {
        rootStyles.setProperty('--width_bar', '0')
    })
})
