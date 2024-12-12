import './Loading.css'
import React from 'react'
export const MainLoading = () => {
    return (
        <div className="main-loading">
            <div className="main-loading__wrapper">
                <div className="loader"></div>
                <div className={'loader-text'}>
                    <div className="loaders">
                        <p className={'text'}>loading</p>
                        <div className="words">
                            <span className="word">buttons</span>
                            <span className="word">forms</span>
                            <span className="word">switches</span>
                            <span className="word">cards</span>
                            <span className="word">buttons</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}