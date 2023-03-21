import { housesService } from "../services/HousesService.js"
import BaseController from "../utils/BaseController.js"

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
        // .get('', this.getHouses)

    }

    async getHouses(req, res, next) {
        try{
        const query = req.query
        const houses = await housesService.getHouses(query)
        return res.send(houses)
    } catch (error) {
        next(error)
    }

    }
}