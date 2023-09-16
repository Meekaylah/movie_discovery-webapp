const Error = () => {
    return(
        <div className="flex flex-col items-center w-[100%] h-screen">
            <img src="/error.svg" />
            <h2 className="font-bold text-4xl leading-20 py-4">
                Nothing Here...
            </h2>
            <a href="/" className="text-white text-center py-2 px-2 w-6/12 font-semibold rounded lg" style={{background: '#BE123C'}}>Back To Home</a>
        </div>
    )
}

export default Error