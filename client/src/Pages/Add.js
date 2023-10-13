import { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const onSave = async () => {
    setLoading(true);
    try {
      const payload = {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        postedBy: user.id,
      };
      await axios.post('/api/journals/additem', payload);
      toast('You have added successfully');
      setLoading(false);
       navigate('/home');
    } catch (err) {
      toast('Something went wrong', 'danger');
    }
  };
  return (
    <Layout>
      {loading && <Loader />}
      <h1 className='text-2xl font-semibold mt-5 ml-5'>Add</h1>
      <div className='px-5 py-5'>
        <input
          type='text'
          className='border-2 h-10 w-full px-4'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='border-2 w-full border-gray-300 my-5'
          placeholder=''
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className=' border-2 border-gray-200 mx-5 px-2'>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          editorClassName='draftEditor'
        />
      </div>
      <div className='flex justify-end space-x-5 mt-5 mr-5 '>
        <button
          className='px-5 py-2 bg-primary rounded text-white pointer'
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </Layout>
  );
};

export default Add;
