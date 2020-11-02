import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import "./JournalEntry.css"

class JournalEntry extends React.Component {
	const[text, setText] = useState("")
		return(
				<div className= "JournalEntry">
				<div className= "editor">
					<CKEditor
						editor={ClassicEditor}
						data={text}
						onChange={ (event, editor) => {
							const data = editor.getData()
							setText(data)
						}}
					/>
				</div>
				<div>
					<h2> Journal Entry</h2>
				</div>
				</div>
	)
}

export default JournalEntry