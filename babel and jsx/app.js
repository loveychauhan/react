const container = <div>
    <section>
        <img
            style={{
                width: '200px',
                backgroundColor: 'purple',
                border: '2px solid red',
                borderRadius:'2px',
            }}
            src="https://th.bing.com/th/id/OIP.vVaPGP1SVemy8Fpc7vPHNQAAAA?rs=1&pid=ImgDetMain" alt="" />
    </section>
    <form action="/">
        <div className="username">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
        </div>
        <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>
    </form>
</div>

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)

console.log(container)