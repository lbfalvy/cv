import React from "react"
import './Options.scss'

function RadioFor({ name, value }: { name: string, value: string }): React.ReactElement {
    const params = new URLSearchParams(window.location.search)
    return <label>
        <input
            type='radio' name={name} value={value}
            checked={params.get(name) == value}
            onClick={() => {
                params.set(name, value)
                window.location.search = params.toString()
            }}
        />
        {value}
    </label>
}

export function Options(): React.ReactElement {
    const params = new URLSearchParams(window.location.search)
    return <div className="Options">
        <div>
            country: 
            <RadioFor name="country" value="uk"/>
            <RadioFor name="country" value="hu"/>
        </div>
        <div>
            language:
            <RadioFor name="lang" value="en"/>
            <RadioFor name="lang" value="hu"/>
        </div>
    </div>
}