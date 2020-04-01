import React, { useState } from 'react';
import { isURL } from 'validator';
import { useDispatch } from 'react-redux';
import { Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { receiveAddPost } from '../actions';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return {
    value,
    onChange: handleChange,
    onSubmit: reset
  };
};

const AddPost = () => {
  const title = useFormInput('');
  const link = useFormInput('');
  const dispatch = useDispatch();
  const history = useHistory();
  const checkURL = () => {
    return isURL(link.value, {
      require_tld: true
    });
  };

  const handleAddPost = e => {
    e.preventDefault();
    if (checkURL()) {
      dispatch(receiveAddPost({ title: title.value, link: link.value }));
      title.onSubmit();
      link.onSubmit();
      history.push('/');
    }
  };

  return (
    <div className="m-5" data-test="component-add-post">
      <Row align="Center">
        <Col sm="10">
          <Form
            onSubmit={e => {
              handleAddPost(e);
            }}
          >
            <FormGroup row className="mt-5">
              <Label for="exampleTitle" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  {...title}
                  placeholder="Title"
                  valid={title.value.length > 0}
                  invalid={title.value.length === 0}
                  data-test="component-input-title"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleLink" sm={2}>
                Link
              </Label>
              <Col sm={10}>
                <Input
                  {...link}
                  placeholder="Link"
                  invalid={!checkURL()}
                  valid={checkURL()}
                  data-test="component-input-link"
                  required
                />
              </Col>
            </FormGroup>
            <Button
              className="float-right"
              type="submit"
              data-test="component-submit-button"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddPost;
