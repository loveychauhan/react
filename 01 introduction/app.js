const container = React.createElement('div',
    { className: 'container', id: 'container' },
    [
        React.createElement('p', { key: 1 },
            'This is a paragraph title.'
        ),
        React.createElement('section', { key: 2 },
            React.createElement('img', { id: 'image', src: 'https://th.bing.com/th/id/OIP.vVaPGP1SVemy8Fpc7vPHNQAAAA?rs=1&pid=ImgDetMain' })
        ),
        React.createElement('form', { key: 3 },
            [
                React.createElement('div', { key: 1 },
                    [
                        React.createElement('label', { key: 1, htmlFor: 'username' }, 'username'),
                        React.createElement('input', { key: 2, id: 'username' })
                    ]
                ),
                React.createElement('div', { key: 2 },
                    [
                        React.createElement('label', { key: 1, htmlFor: 'password' }, 'password'),
                        React.createElement('input', { key: 2, type: 'password', id: 'password' })
                    ]
                )
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)
const box = document.createElement('div');
box.className = 'container',
    box.id = 'container'

const para = document.createElement('p');
para.innerText = 'this is a paragraph title'
box.append(para)

const section = document.createElement('section')
const image = document.createElement('img')
image.src = 'https://th.bing.com/th/id/OIP.vVaPGP1SVemy8Fpc7vPHNQAAAA?rs=1&pid=ImgDetMain'
section.append(image)
box.append(section)

const form = document.createElement('form')
const userContainer = document.createElement('div')
const label = document.createElement('label')
label.htmlFor = 'user-name'
label.innerText = 'Username'
userContainer.append(label)
const username = document.createElement('input')
username.id = 'user-name'
userContainer.append(username)
form.append(userContainer)
box.append(form)

const passwordContainer = document.createElement('div')
const label2 = document.createElement('label')
label2.htmlFor = 'pass'
label2.innerText = 'Password'
passwordContainer.append(label2)
const userPassword= document.createElement('input')
userPassword.id = 'pass'
userPassword.type = 'password'
passwordContainer.append(userPassword)
form.append(passwordContainer)
box.append(form)

const vanilla = document.querySelector('#vanilla');
vanilla.append(box)
