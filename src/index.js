import './css/styles.css';


console.log('hello')

const options = {
    headers: {
        Authorisation: '29767436-14c23983d91939ba59ac81ecb'
    }
}

fetch('https://pixabay.com/api/q=cat, options').then(response => response.json()).then(console.log)


