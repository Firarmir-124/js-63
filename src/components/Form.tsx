import React, {useState} from 'react';
import {Box, CircularProgress, Fab, TextField} from "@mui/material";
import {PostMutation} from "../types";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  onSubmit: (post: PostMutation) => void;
  loader?: boolean;
  post?: PostMutation;
}

const Form:React.FC<Props> = ({onSubmit, loader, post}) => {

  const [valuePost, setValuePost] = useState<PostMutation>( post || {
    data: '',
    name: '',
    content: '',
  })

  const onSubmitForm = async (e:React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      ...valuePost,
      data: `Created on ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString().slice(0, -3)}`
    })

    setValuePost({
      data: '',
      name: '',
      content: '',
    })
  }

  const onChangeForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValuePost(prev => ({...prev, [name]: value}))
  }

  let form:React.ReactNode = <Box sx={{width: '100%'}} component='form' onSubmit={onSubmitForm}>
    <TextField
      value={valuePost.name}
      sx={{width: '100%', mb: '10px'}}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={onChangeForm}
      name='name'
      required
    />
    <TextField
      id="standard-multiline-flexible"
      label="Multiline"
      multiline
      rows={10}
      variant="outlined"
      sx={{width: '100%'}}
      value={valuePost.content}
      onChange={onChangeForm}
      name='content'
      required
    />
    <Fab color="primary" aria-label="add" type='submit' sx={{mt: 1}}>
      {post ? <EditIcon/>  : <AddIcon />}
    </Fab>
  </Box>;


  if (loader) {
    form = <CircularProgress color="secondary" />
  }

  return (
    <>
      {form}
    </>
  );
};

export default Form;