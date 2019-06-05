import { all, fork, takeLatest, put, delay } from 'redux-saga/eefects';
import { ADD_POST_REQUEST, ADD_POST_FAILURE, ADD_POST_SUCCESS,
ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/post';

function addPostAPI() {

}

function* addPost() {
	try {
		yield delay(2000);
		yield put({
			type: ADD_POST_SUCCESS
		})
	} catch (err) {
		yield put({
			type: ADD_POST_FAILURE,
			error: err
		})
	}
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI() {

}

function* addComment(action) {
	try {
		yield delay(2000);
		yield put({
			type: ADD_COMMENT_SUCCESS,
			data: {
				postId: action.data.postId,
			}
		})
	} catch (err) {
		yield put({
			type: ADD_COMMENT_FAILURE,
			error: err
		})
	}
}

function* watchAddComment() {
	yield takeLatest(ADD_COMMENT_REQUEST, addPost);
}

export default function* postSaga() {
	yield all([
		fork(watchAddPost)
	])
}