import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import blogPosts from './db.json';
import "./BlogDetail.css"

const BlogPostDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));
  console.log(blog)

  return (
    <div className="blog-details">
      <Card className="person-blog-card">
        <Card.Img variant="top" src={blog.thumbnail} className="person-thumbnail"/>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.content}</Card.Text>
          <div className="blog-actions">
            <Button variant="success">Likes({blog.likes})</Button>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPostDetails;
