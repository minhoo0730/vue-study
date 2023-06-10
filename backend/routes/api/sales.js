// const app = express();
const express = require('express');
const salesModel = require("../../models/salesModel")
const router = express.Router();

// 메뉴 조회
router.get('/', async (req, res) => {
  try {
    const sales = await salesModel.find({});
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}),
// 특정 메뉴 조회
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesModel.findById(id);
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 등록
router.post('/', async (req, res) => {
  try {
    const sales = await salesModel.create(req.body);
    res.status(200).json(sales);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 수정
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesModel.findByIdAndUpdate(id, req.body);
    if (!sales) {
      return res.status(404).json({ message: `cannot find any sales with ID ${id}` })
    }
    const updatedSales = await salesModel.findById(id);
    res.status(200).json(updatedSales)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}),
// 메뉴 삭제
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesModel.findByIdAndDelete(id);
    if (!sales) {
      return res.status(404).json({ message: `cannot find any sales with ID ${id}` })
    }
    res.status(200).json(sales);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
})
module.exports = router;
