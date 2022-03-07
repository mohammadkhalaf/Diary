import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Layout from '../components/Layout';

const Add = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }, [editorState]);
  return (
    <Layout>
      <h1 className='text-2xl font-semibold mt-5 ml-5'>Add</h1>
      <div className='px-5 py-5'>
        <input
          type='text'
          className='border-2 h-10 w-full px-4'
          placeholder='Title'
        />
        <textarea
          className='border-2 w-full border-gray-300 my-5'
          placeholder=''
        ></textarea>
      </div>
      <div className=' border-2 border-gray-200 mx-5 px-2'>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          editorClassName='draftEditor'
        />
      </div>
    </Layout>
  );
};

export default Add;
