'use client'
import { useFormik } from 'formik';
import React from 'react'
import { useSnackbar } from 'notistack';
const UploadPost = () => {
    const postForm = useFormik({
        initialValues: {
            uploadedBy: '',
            title: '',
            image: '',
            uploadDate: new Date()
        },
        onSubmit: (values, { enqueueSnackbar }) => {
            console.log(values);
            //sending request to backend
            fetch('http://localhost:8080/post/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    enqueueSnackbar('Post uploaded successfully', { variant: 'success' });
                } else {
                    enqueueSnackbar('Post failed', { variant: 'error' });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    });

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={postForm.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="uploadedBy" className="form-label">Uploaded By</label>
                                <input
                                    type="text"
                                    id="uploadedBy"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.uploadedBy}
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                                <small id="helpId" className="text-muted">Help text</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.title}
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                                <small id="helpId" className="text-muted">Help text</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input
                                    type="text"
                                    id="image"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.image}
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                                <small id="helpId" className="text-muted">Help text</small>
                            </div>
                            <button type='submit' className='btn btn-primary mt-3'>Upload Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPost;
