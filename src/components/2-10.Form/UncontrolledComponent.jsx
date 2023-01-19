import React from 'react'

export default function UncontrolledComponent() {

    const fileInputRef = React.createRef(null)

    function handleSubmit(event) {
        event.preventDefault();
        alert(
        `Selected file - ${fileInputRef.current.files[0].name}`
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
