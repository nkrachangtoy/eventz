import React from 'react'


export default function EditEvent() {
    return (
        <div>
            <form onSubmit={handleCreateEvent} className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setTitle(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setDescription(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Location"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setLocation(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Duration"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setTime(target.value)}
                    variant="outlined"
                    />
                    <br />
                    <button class=" m-4 btn btn-dark" type="submit">Create Event</button>
                </div>
            </form>
        </div>
    )
}
