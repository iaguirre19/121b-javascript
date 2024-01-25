const dataFromUser = () => {
    const values = []

    for(let i = 0; i < 3; i++){
        let countValue = 1
        values.push(prompt(`Please enter a number (${countValue++} of 3)`))
    }

}