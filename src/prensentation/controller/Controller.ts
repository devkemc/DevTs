import { Request, Response } from 'express'
import { ICrudService } from '../../domain/service/IService'
import { IView } from '../view/IView'

abstract class Controller {
  constructor(protected service: ICrudService, protected view: IView) {}

  public async save(req: Request, res: Response) {
    const entityJson = req.body
    const entity = this.view.getEntity(entityJson)
    const responseSave = await this.service.save(entity)
    res.json(responseSave)
  }

  public async findAll(res: Response) {
    const responseFindAll = await this.service.findAll()
    res.json(responseFindAll)
  }

  public async delete(req: Request, res: Response) {
    const entityParameter = req.query
    const entity = this.view.getEntity(entityParameter)
    const responseDelete = await this.service.delete(entity)
    res.json(responseDelete)
  }

  public async edit(req: Request, res: Response) {
    const entityJson = req.body
    const entity = this.view.getEntity(entityJson)
    const responseEdit = await this.service.edit(entity)
    res.json(responseEdit)
  }

  public async findOne(req: Request, res: Response) {
    const entityParameter = req.query
    const entity = this.view.getEntity(entityParameter)
    const responseFindOne = await this.service.findOne(entity)
    res.json(responseFindOne)
  }
}
