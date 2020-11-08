import React, { useState } from 'react';
<<<<<<< HEAD
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import "./JournalEntry.css"

class JournalEntry extends React.Component {
	const[text, setText] = useState(' ');
=======
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";

import "./JournalEntry.css"

function JournalEntry() {
	const[text, setText] = useState("");
>>>>>>> cf95d863f5ea1f4dfc9b4f2923d8666094186299
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