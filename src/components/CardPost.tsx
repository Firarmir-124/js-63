import React from 'react';
import {Post} from "../types";
import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

interface Props {
  post: Post;
}

const CardPost:React.FC<Props> = ({post}) => {

  return (
    <Grid sx={{m: 1}}>
      <Card sx={{ width: 500, mb: 10 }}>
        <CardContent>
          <Typography variant="body2">
            {post.data}
            <br />
          </Typography>
          <Typography variant="h5" component="div" sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
            {post.name}
          </Typography>
          <Typography sx={{ fontSize: 14, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} color="text.secondary" gutterBottom>
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink className='link' to={'Posts/' + post.id}>Подробнее</NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardPost;