
import React from 'react'

export default function ControlMultiInputs() {
    const [name, setName] = React.useState("")
    const [essay, setEssay] = React.useState("Please write an essay about your favorite DOM element.")
    const [flavor, setFlavor] = React.useState("coconut")

    function handleChange(event) {
        const name = event.target.name

        if (name === 'name') {
            setName(event.target.value);
        } else if (name === 'essay') {
            setEssay(event.target.value);
        } else if (name === 'flavor') {
            setFlavor(event.target.value)
        }

    }

    function handleSubmit(event) {
        alert(`name : ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />

            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <br />
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
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
