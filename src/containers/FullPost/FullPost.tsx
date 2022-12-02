import React, {useCallback, useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Post} from "../../types";
import axiosApi from "../../axiosApi";
import {Button, Card, CardActions, CardContent, LinearProgress, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const FullPost = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loader, setLoader] = useState(false);

  const resPost = useCallback(async () => {
    try {
      setLoader(true)
      const post = await axiosApi.get<Post>('/posts/' + id + '.json');
      setPost(post.data);
    } finally {
      setLoader(false)
    }
  }, [id])

  useEffect(() => {
    void resPost();
  }, [resPost])

  const removePost = async () => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigate('/');
  }

  let card: React.ReactNode = post ? (
    <Card sx={{ width: '100%', mb: 5 }}>
      <CardContent>
        <Typography variant="body2">
          {post.data}
          <br />
        </Typography>
        <Typography variant="h5" component="div">
          {post.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink className='link' to={'/CreateAndEditPost/' + id}><EditIcon color="secondary"/></NavLink>
        <Button variant="outlined" onClick={removePost}><DeleteIcon/></Button>
      </CardActions>
    </Card>
  ) : null

  if (loader) {
    card = <LinearProgress sx={{height: '10px'}} color="secondary" />
  }


  return (
    <>
      {card}
    </>
  )
};

export default FullPost;