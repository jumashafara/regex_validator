
        const inputs = document.querySelectorAll('input')

        const regexes = {
            name: /^[\w]{3,12}$/,
            email: /^([\w]+\d*)@([\w]+\.)([\w]{2,8})([\.\w]*)$/,
            number: /^\d{10}$/,
            password: /[A-Z]+[a-z]+[0-9]+/
        }

        const validate = (field, regex) => {

            if(regex.test(field.value)){
                field.className = 'valid'
            }else{
                field.className = 'invalid'
            }
        }

        inputs.forEach((input) => {
            input.addEventListener('keyup',(e) => {
                e.preventDefault()

                validate(e.target, regexes[e.target.attributes.name.value])

            })
        })
