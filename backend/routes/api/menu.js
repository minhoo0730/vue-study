// const app = express();
const express = require('express');
const menuModel = require("../../models/menuModel")
const router = express.Router();

// 메뉴 조회
router.get('/', async (req, res) => {
  try {
    const menu = await menuModel.find({});
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}),
// 특정 메뉴 조회
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await menuModel.findById(id);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 등록
router.post('/', async (req, res) => {
  try {
    const menu = await menuModel.create(req.body);
    res.status(200).json(menu);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 수정
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await menuModel.findByIdAndUpdate(id, req.body);
    if (!menu) {
      return res.status(404).json({ message: `cannot find any menu with ID ${id}` })
    }
    const updatedmenu = await menuModel.findById(id);
    res.status(200).json(updatedmenu)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 삭제
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await menuModel.findByIdAndDelete(id);
    if (!menu) {
      return res.status(404).json({ message: `cannot find any menu with ID ${id}` })
    }
    res.status(200).json(menu);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
})
module.exports = router;
