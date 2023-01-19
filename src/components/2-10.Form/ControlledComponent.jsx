import React from 'react'

export default function ControlledComponent() {

    const [name, setName] = React.useState("")
    const [essay, setEssay] = React.useState("Please write an essay about your favorite DOM element.")
    const [flavor, setFlavor] = React.useState("coconut")

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleEssayChange(event) {
        setEssay(event.target.value);
    }
    
    function handleSubmit(event) {
        alert(`name : ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }

    function handleFlavorChange(event) {
        setFlavor(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />

            <label>
                Essay:
                <textarea value={essay} onChange={handleEssayChange} />
            </label>
            <br />
            <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" name="Submit" />
        </form>
    )
}
