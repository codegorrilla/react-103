import react, {useState} from 'react'

export default function Form(){
    const [inputs, setInputs] = useState({})
    const [textarea, setTextarea] = useState(
        'The content of a textarea goes in th value attribute'
    )
    const [select, setSelect] = useState('Volvo')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(inputs)
    }

    const handleTextArea = (e)=>{
        setTextarea(e.target.value)
    }

    const handleSelect = (e) =>{
        setSelect(e.target.value)
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label>enter your name:
                <input type='text' name = 'username' value= {inputs.username || ""} onChange = {handleChange} />
            </label>

            <label>enter your age:
                <input type='number' name = 'age' value= {inputs.age || ""} onChange = {handleChange} />
            </label>

            <label>
                enter your message:
                <textarea value = {textarea} onChange = {handleTextArea} />
            </label>

            <label>
                select your car:
                <select value={select} onChange={handleSelect}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </label>



            <input type='submit' />
        </form>
    )
}