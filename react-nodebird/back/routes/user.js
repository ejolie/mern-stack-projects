const express = require('express');
const router = express.Router();

// 내 정보 가져오기
router.get('/', (req, res) => {});

// 유저 등록하기
router.post('/', (req, res) => {});

// 남의 정보 가져오기
// :id - req.params.id로 가져올 수 있다.
router.get('/:id', (req, res) => {});

// 로그아웃
router.post('/logout', (req, res) => {});

// 로그인
router.post('/login', (req, res) => {});

// 유저 팔로우 목록 가져오기
router.get('/:id/follow', (req, res) => {});

// 유저 팔로워 목록 가져오기
router.get('/:id/follower', (req, res) => {});

// 유저 팔로우 하기
router.post('/:id/follow', (req, res) => {});

// 팔로우 취소하기
router.delete('/:id/follow', (req, res) => {});

// 유저 게시물 가져오기
router.get('/posts', (req, res) => {});

module.exports = router;
