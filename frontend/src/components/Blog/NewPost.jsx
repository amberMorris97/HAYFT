import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { addNewBlogPost } from '../../redux/actions/blogActions'

const newPost = () => {
  const editorStyle = {
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    padding: '16px',
    gap: '24px',
  };

  const auth = useSelector(state => state.authReducer.isAuthenticated);

  const dispatch = useDispatch();

  const [blogInfo, setBlogInfo] = useState({
    title: '',
    author: '',
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  if (!auth) {
    return (
      <h1>You do not have the correct credentials to access this page.</h1>
    );
  }

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const handleChange = (e) => {
    const field = e.target.name;

    setBlogInfo({
      ...blogInfo,
      [field]: e.target.value,
    })
  };

  const handleSubmit = () => {
    dispatch(addNewBlogPost({
      title: blogInfo.title,
      author: blogInfo.author,
      post: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    }));
  };

  return (
    <div id="make-post-container" style={editorStyle}>
      <h1>What&apos;s On Your Mind?</h1>
      <TextField InputLabelProps={{ className: 'titleLabel' }} InputProps={{ className: 'titleInput' }} color="secondary" variant="outlined" id="title" label="Title" name="title" onChange={handleChange}></TextField>
      <Editor
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default newPost;