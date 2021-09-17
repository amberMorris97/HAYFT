import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { addNewBlogPost } from '../../redux/actions/blogActions';
import SinglePost from './SinglePost.jsx';

const newPost = () => {
  const auth = useSelector(state => state.authReducer.isAuthenticated);
  const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

  const dispatch = useDispatch();

  const [blogInfo, setBlogInfo] = useState({
    title: '',
    author: '',

  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [contentState, setContentState] = useState(convertFromRaw(content));

  if (!auth) {
    return (
      <h1>You do not have the correct credentials to access this page.</h1>
    );
  }

  const onEditorStateChange = (editorState) => {

    setEditorState(editorState);
  }

  // const onContentStateChange = (e) => {
  //   console.log(contentState)
  //   setContentState(convertFromRaw(e))
  // }



  const handleChange = (e) => {
    const field = e.target.name;

    setBlogInfo({
      ...blogInfo,
      [field]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    dispatch(addNewBlogPost({
      title: blogInfo.title,
      author: blogInfo.author,
      post: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    }));
  };

  return (
    <div id="make-post-container">
      <h1>What&apos;s On Your Mind?</h1>
      <TextField InputLabelProps={{ className: 'titleLabel' }} InputProps={{ className: 'titleInput' }} color="secondary" variant="outlined" id="title" label="Title" name="title" onChange={handleChange}></TextField>
      <TextField InputLabelProps={{ className: 'authorLabel' }} InputProps={{ className: 'authorInput' }} color="secondary" variant="outlined" id="author" label="Author" name="author" onChange={handleChange}></TextField>
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



  )

  // return (
  //   <div id="create-post-container" className="fullscreen">
  //     <form id="blog-post-form" onSubmit={handleSubmit}>
  //       <TextField color="secondary" variant="outlined" id="title" label="Title" name="title" onChange={handleChange}></TextField>
  //       <TextField color="secondary" variant="outlined" id="author" label="Author" name="author" onChange={handleChange}></TextField>
  //       <TextField color="secondary" variant="outlined" id="img" label="Img Url" name="img" onChange={handleChange}></TextField>
  //       <TextField color="secondary" multiline variant="outlined" id="post" label="Post" name="post" onChange={handleChange}></TextField>
  //       <Button type="submit">Share</Button>
  //     </form>
  //   </div>
  // );
}

export default newPost;