import express from "express"
import { createBanner, getAllBanners, getRandomBanner, deleteBanner } from "../controller/banner.controller.js"

const router = express.Router()
//CREATE BANNER
router.post('/', createBanner)



//GET ALL BANNERS
router.get('/', getAllBanners)

//GET RANDOM BANNER

router.get('/random', getRandomBanner)

//delete banner

router.delete('/:id', deleteBanner)

export default router