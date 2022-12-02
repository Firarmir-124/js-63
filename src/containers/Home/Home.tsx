import React, {useCallback, useEffect, useState} from 'react';
import {Post, PostList} from "../../types";
import CardPost from "../../components/CardPost";
import {Alert, Box, Grid, LinearProgress, Typography} from "@mui/material";
import axiosApi from "../../axiosApi";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loader, setLoader] = useState(false);

  const resPost = useCallback(async () => {
    try {
      setLoader(true)
      const resPost = await axiosApi.get<PostList>('/posts.json');

      const posts = resPost.data ? Object.keys(resPost.data).map(key => {
        const post = resPost.data[key];
        post.id = key;

        return post
      }): [];

      setPosts(posts)

    } finally {
      setLoader(false)
    }
  }, [])

  useEffect(() => {
    void resPost()
  }, [resPost])


  return !loader ? (
    <>
      <Box sx={{my: 5}} component='div'>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Новости дня
        </Typography>
      </Box>
      {
        posts.length !== 0 ? (
          <Grid container>
            {posts.map(post => (
              <CardPost key={post.id} post={post}/>
            ))}
          </Grid>
        ) : <Alert sx={{mt: 5}} severity="info">В данный момент постов нет</Alert>
      }
    </>
  ): (<LinearProgress sx={{height: '10px'}} color="secondary" />)
};

export default Home;