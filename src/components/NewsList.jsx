import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import NewsItem from './NewsItem';

const NewsList = ({ newsItems, loading, newsItemsTotal, theme, loadMore }) => {
  return (
    <Container>
      {newsItemsTotal !== null && !loading ? (
        <Row className='py-3'>
          <Col xs={12} sm={12}>
            <p className='h5  text-center'>News</p>
          </Col>
        </Row>
      ) : null}

      {newsItemsTotal !== null && (
        <Row className='justify-content-md-center mb-4'>
          {newsItems.map((item, i) => (
            <NewsItem ind={i} item={item} />
          ))}
        </Row>
      )}

      {loading && (
        <Row className='justify-content-md-center py-4'>
          <Col xs={12} sm={8} className='text-center'>
            <Spinner animation='border' size='lg' />
          </Col>
        </Row>
      )}

      {newsItems.length < newsItemsTotal && !loading && (
        <Row className='justify-content-md-center py-2'>
          <Col xs={12} sm={12} className='text-center'>
         
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewsList;
