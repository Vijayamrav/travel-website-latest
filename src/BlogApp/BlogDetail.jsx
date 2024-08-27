import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import blogPosts from './db.json';
import "./BlogDetail.css";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const BlogPostDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));
  
  const [likes, setLikes] = useState(`${blog.likes}`);
  const blogid = blog.id;

  const handleLikes = async () => {
    try {
      const updatedLikes = Number(likes) + 1;
      await axios.put(`http://localhost:3001/${blogid}`, {
        ...blog,
        likes: updatedLikes
      });
      setLikes(updatedLikes);
    } catch (err) {
      console.log("error while updating likes");
    }
  };

  return (
    <div className="blog-details">
      <Card className="person-blog-card">
        <Carousel>
          {blog.images.map((image, index) => (
            <Carousel.Item key={index}>
              <Card.Img variant="top" src={image} className="person-thumbnail" />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Text className="content-title">{blog.title}</Card.Text>
          <Card.Text className="blog-content">{blog.content}</Card.Text>
          <div className="blog-actions">
            <Button variant="success" onClick={handleLikes}>Likes({likes})</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPostDetails;
