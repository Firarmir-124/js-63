import React, {useCallback, useEffect, useState} from 'react';
import Form from "../../components/Form";
import {useNavigate, useParams} from "react-router-dom";
import {PostMutation} from "../../types";
import axiosApi from "../../axiosApi";
import {Box, Card, CardContent, CardMedia} from "@mui/material";
import imgPost from "../../assets/imgForm.svg";

const CreateAndEditPost = () => {
  const navigator = useNavigate();
  const {id} = useParams();
  const [loader, setLoader] = useState(false);
  const [post, setPost] = useState<PostMutation | null>(null);

  const resPost = useCallback(async () => {
    try {
      const post = await axiosApi.get('/posts/' + id + '.json');
      setPost(post.data);
    } finally {

    }
  }, [id])

  useEffect(() => {
    if (id) {
      resPost().catch(console.error);
    }
  }, [id, resPost])


  const updatePost = async (post: PostMutation) => {
    try {
      setLoader(true)

      if (!id) {
        await axiosApi.post('/posts.json', post);
      } else {
        await axiosApi.put('/posts/' + id + '.json', post);
        navigator('/');
      }

    } finally {
      setLoader(false)
    }
  }



  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}>
        <Card sx={{width: '500px'}}>
          <CardMedia
            component="img"
            height="200"
            image={imgPost}
            alt="Paella dish"
          />
          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {
              !id ? <Form onSubmit={updatePost} loader={loader} /> : (post && <Form onSubmit={updatePost} loader={loader} post={post}/>)
            }
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CreateAndEditPost;