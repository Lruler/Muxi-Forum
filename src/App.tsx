import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './app.css'

function app() {
    const [count, setCount] = useState(0)
    console.log('浏览器渲染完毕')
    useEffect(() => {
        console.log('调用effect咯')
        return () => {
            console.log('清楚回调咯')
        }
    })

    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>app.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="app-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="app-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default app
